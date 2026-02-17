package utils

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

// LLMConfig LLM 配置
type LLMConfig struct {
	APIKey    string `json:"apiKey"`
	Endpoint  string `json:"endpoint"`
	ModelName string `json:"modelName"`
}

// SplitParagraphRequest 拆分段落请求
type SplitParagraphRequest struct {
	Content string `json:"content"`
}

// SplitParagraphResponse 拆分段落响应
type SplitParagraphResponse struct {
	Paragraphs []LLMParagraph `json:"paragraphs"`
}

// LLMParagraph LLM 返回的段落
type LLMParagraph struct {
	Content string `json:"content"`
	Speaker string `json:"speaker"`
	Tone    string `json:"tone"`
}

// LLMClient LLM 客户端
type LLMClient struct {
	config LLMConfig
	client *http.Client
}

// NewLLMClient 创建 LLM 客户端
func NewLLMClient(config LLMConfig) *LLMClient {
	return &LLMClient{
		config: config,
		client: &http.Client{
			Timeout: 60 * time.Second,
		},
	}
}

// DefaultLLMConfig 默认 LLM 配置
func DefaultLLMConfig() LLMConfig {
	return LLMConfig{
		APIKey:    "", // 需要用户配置
		Endpoint:  "https://ark.cn-beijing.volces.com/api/v3/chat/completions",
		ModelName: "ep-20250101000000-xxxxx", // 需要用户配置
	}
}

// SplitParagraph 拆分章节文本为段落
func (c *LLMClient) SplitParagraph(content string) ([]LLMParagraph, error) {
	if c.config.APIKey == "" || c.config.ModelName == "" {
		return nil, fmt.Errorf("LLM 配置未完成，请先配置 API Key 和 Model Name")
	}

	// 构建提示词
	prompt := buildSplitPrompt(content)

	// 调用 LLM
	response, err := c.callChat(prompt)
	if err != nil {
		return nil, err
	}

	// 解析响应
	return parseSplitResponse(response)
}

// buildSplitPrompt 构建拆分提示词
func buildSplitPrompt(content string) string {
	return fmt.Sprintf(`你是一个专业的小说文本解析助手。请将以下小说文本拆分成段落，并识别每个段落的说话角色和语气。

要求：
1. 将文本按对话和叙述拆分成多个段落
2. 每个段落应该是一段连续的对话或叙述
3. 对于对话，识别说话角色（speaker）和语气（tone）
4. 对于叙述性文本，speaker 留空，tone 为 "neutral"
5. 语气可选值：neutral, happy, sad, angry, excited, fearful, surprised, disgusted

请以 JSON 格式返回，格式如下：
{
  "paragraphs": [
    {
      "content": "段落内容",
      "speaker": "说话角色，没有则为空字符串",
      "tone": "语气，默认为 neutral"
    }
  ]
}

小说文本：
%s`, content)
}

// callChat 调用聊天 API
func (c *LLMClient) callChat(prompt string) (string, error) {
	requestBody := map[string]interface{}{
		"model": c.config.ModelName,
		"messages": []map[string]string{
			{
				"role":    "user",
				"content": prompt,
			},
		},
		"temperature": 0.7,
	}

	jsonBody, err := json.Marshal(requestBody)
	if err != nil {
		return "", fmt.Errorf("序列化请求失败: %w", err)
	}

	req, err := http.NewRequest("POST", c.config.Endpoint, bytes.NewBuffer(jsonBody))
	if err != nil {
		return "", fmt.Errorf("创建请求失败: %w", err)
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+c.config.APIKey)

	resp, err := c.client.Do(req)
	if err != nil {
		return "", fmt.Errorf("请求失败: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("读取响应失败: %w", err)
	}

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("API 返回错误: %s - %s", resp.Status, string(body))
	}

	var chatResponse struct {
		Choices []struct {
			Message struct {
				Content string `json:"content"`
			} `json:"message"`
		} `json:"choices"`
	}

	if err := json.Unmarshal(body, &chatResponse); err != nil {
		return "", fmt.Errorf("解析响应失败: %w", err)
	}

	if len(chatResponse.Choices) == 0 {
		return "", fmt.Errorf("API 返回空响应")
	}

	return chatResponse.Choices[0].Message.Content, nil
}

// parseSplitResponse 解析拆分响应
func parseSplitResponse(content string) ([]LLMParagraph, error) {
	// 尝试提取 JSON 部分
	var jsonStr string
	startIdx := -1
	endIdx := -1
	inString := false
	escapeNext := false
	braceCount := 0

	for i, char := range content {
		if escapeNext {
			escapeNext = false
			continue
		}
		if char == '\\' {
			escapeNext = true
			continue
		}
		if char == '"' {
			inString = !inString
			continue
		}
		if !inString {
			if char == '{' {
				if braceCount == 0 {
					startIdx = i
				}
				braceCount++
			} else if char == '}' {
				braceCount--
				if braceCount == 0 {
					endIdx = i + 1
					break
				}
			}
		}
	}

	if startIdx >= 0 && endIdx > startIdx {
		jsonStr = content[startIdx:endIdx]
	} else {
		jsonStr = content
	}

	var response SplitParagraphResponse
	if err := json.Unmarshal([]byte(jsonStr), &response); err != nil {
		return nil, fmt.Errorf("解析 LLM 响应失败: %w", err)
	}

	return response.Paragraphs, nil
}
