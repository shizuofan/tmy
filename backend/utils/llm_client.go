package utils

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/volcengine/volcengine-go-sdk/service/arkruntime"
	"github.com/volcengine/volcengine-go-sdk/service/arkruntime/model"
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
	Paragraphs   []LLMParagraph `json:"paragraphs"`
	Characters   []LLMCharacter `json:"characters"`
}

// LLMParagraph LLM 返回的段落
type LLMParagraph struct {
	Content string `json:"content"`
	Speaker string `json:"speaker"`
	Tone    string `json:"tone"`
}

// LLMCharacter LLM 返回的角色信息
type LLMCharacter struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

// CharacterInfoForPrompt 用于传递给提示词的角色信息
type CharacterInfoForPrompt struct {
	Name        string
	Description string
}

// LLMClient LLM 客户端
type LLMClient struct {
	config LLMConfig
	client *arkruntime.Client
}

// NewLLMClient 创建 LLM 客户端
func NewLLMClient(config LLMConfig) *LLMClient {
	var client *arkruntime.Client
	if config.APIKey != "" {
		baseURL := "https://ark.cn-beijing.volces.com/api/v3"
		if config.Endpoint != "" {
			baseURL = config.Endpoint
		}
		client = arkruntime.NewClientWithApiKey(
			config.APIKey,
			arkruntime.WithBaseUrl(baseURL),
		)
	}
	return &LLMClient{
		config: config,
		client: client,
	}
}

// DefaultLLMConfig 默认 LLM 配置
func DefaultLLMConfig() LLMConfig {
	return LLMConfig{
		APIKey:    "", // 需要用户配置
		Endpoint:  "https://ark.cn-beijing.volces.com/api/v3",
		ModelName: "ep-20250101000000-xxxxx", // 需要用户配置
	}
}

// SplitParagraphResult 拆分段落结果
type SplitParagraphResult struct {
	Paragraphs []LLMParagraph
	Characters []LLMCharacter
}

// SplitParagraph 拆分章节文本为段落
func (c *LLMClient) SplitParagraph(ctx context.Context, content string, knownCharacters []CharacterInfoForPrompt) (*SplitParagraphResult, error) {
	Info("LLM SplitParagraph 开始: contentLength=%d, knownCharactersCount=%d", len(content), len(knownCharacters))
	Debug("LLM 配置: APIKey=****%s, ModelName=%s, Endpoint=%s",
		maskAPIKey(c.config.APIKey), c.config.ModelName, c.config.Endpoint)

	if c.config.APIKey == "" || c.config.ModelName == "" {
		Error("LLM 配置不完整: APIKey=%v, ModelName=%v", c.config.APIKey == "", c.config.ModelName == "")
		return nil, fmt.Errorf("LLM 配置未完成，请先配置 API Key 和 Model Name")
	}

	if c.client == nil {
		Error("LLM 客户端未初始化")
		return nil, fmt.Errorf("LLM 客户端未初始化")
	}

	if ctx == nil {
		ctx = context.Background()
		Debug("使用默认 context.Background()")
	}

	// 构建提示词
	prompt := buildSplitPrompt(content, knownCharacters)
	Debug("提示词构建完成，长度: %d", len(prompt))

	// 调用 LLM
	Info("开始调用 LLM API...")
	response, err := c.callChat(ctx, prompt)
	if err != nil {
		Error("LLM API 调用失败: %v", err)
		return nil, err
	}
	Info("LLM API 调用成功，响应长度: %d", len(response))
	Debug("LLM 响应内容: %s", response)

	// 解析响应
	result, err := parseSplitResponse(response)
	if err != nil {
		Error("解析 LLM 响应失败: %v", err)
		return nil, err
	}
	Info("LLM 响应解析成功，段落数: %d, 角色数: %d", len(result.Paragraphs), len(result.Characters))

	return result, nil
}

// maskAPIKey 掩码显示 API Key
func maskAPIKey(key string) string {
	if len(key) <= 8 {
		return "****"
	}
	return key[:4] + "..." + key[len(key)-4:]
}

// buildSplitPrompt 构建拆分提示词
func buildSplitPrompt(content string, knownCharacters []CharacterInfoForPrompt) string {
	var knownCharsStr string
	if len(knownCharacters) > 0 {
		var charListStr string
		for i, c := range knownCharacters {
			if i > 0 {
				charListStr += "\n"
			}
			if c.Description != "" {
				charListStr += fmt.Sprintf("- %s: %s", c.Name, c.Description)
			} else {
				charListStr += fmt.Sprintf("- %s", c.Name)
			}
		}
		knownCharsStr = fmt.Sprintf(`

已知角色列表（优先使用这些角色名）：
%s

注意：
- 说话角色请优先从已知角色列表中选择
- 如果发现新角色，请直接使用识别到的角色名
`, charListStr)
	}

	return fmt.Sprintf(`你是一个专业的小说文本解析助手。请将以下小说文本拆分成段落，并识别每个段落的说话角色和语气。同时分析文中出现的角色信息。

要求：
1. 将文本按对话和叙述拆分成多个段落
2. 每个段落应该是一段连续的对话或叙述
3. 对于对话，识别说话角色（speaker）和语气（tone）
4. 对于叙述性文本，speaker 留空，tone 为 "neutral"
5. 语气可选值：neutral, happy, sad, angry, excited, fearful, surprised, disgusted
6. 识别文中出现的所有角色，为每个角色生成简短的描述（如与主角的关系、性格特点等）
%s

请以 JSON 格式返回，格式如下：
{
  "paragraphs": [
    {
      "content": "段落内容",
      "speaker": "说话角色，没有则为空字符串",
      "tone": "语气，默认为 neutral"
    }
  ],
  "characters": [
    {
      "name": "角色名称",
      "description": "角色简介：描述角色的身份、与主角的关系、性格特点等"
    }
  ]
}

小说文本：
%s`, knownCharsStr, content)
}

// callChat 调用聊天 API
func (c *LLMClient) callChat(ctx context.Context, prompt string) (string, error) {
	Debug("callChat: Model=%s, promptLength=%d", c.config.ModelName, len(prompt))

	temperature := float32(0.7)
	req := model.CreateChatCompletionRequest{
		Model: c.config.ModelName,
		Messages: []*model.ChatCompletionMessage{
			{
				Role: model.ChatMessageRoleUser,
				Content: &model.ChatCompletionMessageContent{
					StringValue: &prompt,
				},
			},
		},
		Temperature: &temperature,
	}

	Debug("正在发送请求到火山引擎 API...")
	resp, err := c.client.CreateChatCompletion(ctx, req)
	if err != nil {
		Error("火山引擎 API 返回错误: %v", err)
		return "", fmt.Errorf("API 调用失败: %w", err)
	}

	Debug("API 响应收到: ID=%s, Choices=%d", resp.ID, len(resp.Choices))

	if len(resp.Choices) == 0 {
		Warn("API 返回空响应 Choices")
		return "", fmt.Errorf("API 返回空响应")
	}

	// 提取消息内容
	msg := resp.Choices[0].Message
	if msg.Content == nil {
		Warn("API 返回消息内容为 nil")
		return "", fmt.Errorf("API 返回空消息内容")
	}

	if msg.Content.StringValue != nil {
		result := *msg.Content.StringValue
		Debug("成功提取消息内容，长度=%d", len(result))
		return result, nil
	}

	Error("不支持的消息内容类型")
	return "", fmt.Errorf("不支持的消息内容类型")
}

// parseSplitResponse 解析拆分响应
func parseSplitResponse(content string) (*SplitParagraphResult, error) {
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
		// 如果找不到 JSON 格式，尝试清理 markdown 代码块标记
		cleaned := strings.TrimSpace(content)
		cleaned = strings.TrimPrefix(cleaned, "```json")
		cleaned = strings.TrimPrefix(cleaned, "```")
		cleaned = strings.TrimSuffix(cleaned, "```")
		jsonStr = strings.TrimSpace(cleaned)
	}

	var response SplitParagraphResponse
	if err := json.Unmarshal([]byte(jsonStr), &response); err != nil {
		// 如果解析失败，尝试只解析 paragraphs 部分（兼容旧格式）
		var fallbackResp struct {
			Paragraphs []LLMParagraph `json:"paragraphs"`
		}
		if fallbackErr := json.Unmarshal([]byte(jsonStr), &fallbackResp); fallbackErr != nil {
			return nil, fmt.Errorf("解析 LLM 响应失败: %w", err)
		}
		return &SplitParagraphResult{
			Paragraphs: fallbackResp.Paragraphs,
			Characters: []LLMCharacter{},
		}, nil
	}

	return &SplitParagraphResult{
		Paragraphs: response.Paragraphs,
		Characters: response.Characters,
	}, nil
}
