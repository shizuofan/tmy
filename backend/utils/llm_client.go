package utils

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"tmy2/backend/models"

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
	Paragraphs []LLMParagraph `json:"paragraphs"`
	Characters []LLMCharacter `json:"characters"`
}

// LLMParagraph LLM 返回的段落
type LLMParagraph struct {
	Content string `json:"content"`
	Speaker string `json:"speaker"`
	Tone    string `json:"tone"`
}

// LLMCharacter LLM 返回的角色信息
type LLMCharacter struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Gender      string   `json:"gender"`  // 性别: male/female/unknown
	Age         string   `json:"age"`     // 年龄: child/teen/adult/senior/unknown
	Aliases     []string `json:"aliases"` // 别名/外号列表
}

// SplitParagraphResponseV2 支持新增和更新角色的响应结构
type SplitParagraphResponseV2 struct {
	Paragraphs       []LLMParagraph `json:"paragraphs"`
	NewCharacters    []LLMCharacter `json:"new_characters"`
	UpdateCharacters []LLMCharacter `json:"update_characters"`
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
- 如果发现小说文本中出现角色，请直接使用识别到的角色名
`, charListStr)
	}

	// 构建语气列表说明
	toneList := buildToneList()

	return fmt.Sprintf(`你是一个专业的小说文本解析助手。请将以下小说文本拆分成段落，并识别每个段落的说话角色和语气。同时分析文中出现的角色信息。

重要规则：
- 只识别有讲话的角色

性别可选值（gender字段）：
- male: 男性
- female: 女性
- unknown: 未知或无法确定

年龄可选值（age字段）：
- child: 儿童（0-12岁）
- teen: 少年/青少年（13-19岁）
- adult: 成年人（20-59岁）
- senior: 老年人（60岁以上）
- unknown: 未知或无法确定

要求：
1. 将文本按对话和叙述拆分成多个段落
2. 每个段落应该是一段连续的对话或叙述
3. 对于对话，识别说话角色（speaker）和语气（tone）
4. 对于叙述性文本，speaker 留空，tone 为 "neutral"
5. 一般角色tone可选值（必须从以下列表中选择）：
%s
6. 仅识别本次小说文本中实际出现的角色，为每个角色生成简短的描述（如与主角的关系、性格特点等）
%s
7. characters数组中只包含文本中明确出现的角色名
8. 不要添加任何文本中不存在的虚构角色
9. 为每个识别到的角色添加gender字段，根据文本内容判断性别,如果无法根据文本内容判断，根据姓名推测
10. 为每个识别到的角色添加age字段，根据文本内容判断年龄段,如果无法根据文本内容判断，根据姓名推测
11. 为每个识别到的角色添加aliases字段数组，收集该角色在文本中的所有别名、外号、昵称等不同称呼
    - 注意：同一角色可能有多个称呼（如全名、小名、外号、尊称等）
    - 例如："张三" 可能被称为 "三哥"、"三儿"、"张先生" 等

请以 JSON 格式返回，格式如下：
{
  "paragraphs": [
    {
      "content": "段落内容",
      "speaker": "说话角色，没有则为空字符串",
      "tone": "语气，默认为 neutral"
    }
  ],
  "new_characters": [
    {
      "name": "文本中实际出现的角色名称[新增]",
      "description": "角色简介：描述角色的身份、与主角的关系、性格特点等",
      "gender": "性别：male/female/unknown",
      "age": "年龄段：child/teen/adult/senior/unknown",
      "aliases": ["别名1", "别名2", "外号1"]
    }
  ],
  "update_characters": [
    {
      "name": "文本中实际出现的角色名称[更新]",
      "description": "角色简介：描述角色的身份、与主角的关系、性格特点等",
      "gender": "性别：male/female/unknown",
      "age": "年龄段：child/teen/adult/senior/unknown",
      "aliases": ["别名1", "别名2", "外号1"]
    }
  ]
}

小说文本：
%s`, toneList, knownCharsStr, content)
}

// buildToneList 构建语气列表说明
func buildToneList() string {
	toneMap := models.GetToneNameMap()
	tones := models.GetAllChineseTones()

	var builder strings.Builder
	for _, tone := range tones {
		name := toneMap[tone]
		if name == "" {
			name = tone
		}
		builder.WriteString(fmt.Sprintf("- %s: %s\n", tone, name))
	}
	return builder.String()
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

	// 记录完整的请求信息
	Info("========== 火山引擎 API 请求 ==========")
	Info("请求 Model: %s", req.Model)
	Info("请求 Temperature: %.2f", *req.Temperature)
	Info("请求 Messages 数量: %d", len(req.Messages))
	for i, msg := range req.Messages {
		Info("Message[%d] Role: %s", i, msg.Role)
		if msg.Content != nil && msg.Content.StringValue != nil {
			content := *msg.Content.StringValue
			if len(content) > 500 {
				Info("Message[%d] Content: %s...", i, content)
				Debug("Message[%d] 完整 Content:\n%s", i, content)
			} else {
				Info("Message[%d] Content:\n%s", i, content)
			}
		}
	}
	Info("=======================================")

	Debug("正在发送请求到火山引擎 API...")
	resp, err := c.client.CreateChatCompletion(ctx, req)
	if err != nil {
		Error("火山引擎 API 返回错误: %v", err)
		return "", fmt.Errorf("API 调用失败: %w", err)
	}

	// 记录完整的响应信息
	Info("========== 火山引擎 API 响应 ==========")
	Info("响应 ID: %s", resp.ID)
	Info("响应 Model: %s", resp.Model)
	Info("响应 Object: %s", resp.Object)
	Info("响应 Created: %d", resp.Created)
	Info("Token 使用: PromptTokens=%d, CompletionTokens=%d, TotalTokens=%d",
		resp.Usage.PromptTokens, resp.Usage.CompletionTokens, resp.Usage.TotalTokens)
	Info("Choices 数量: %d", len(resp.Choices))
	for i, choice := range resp.Choices {
		Info("Choice[%d]: Index=%d, FinishReason=%s", i, choice.Index, choice.FinishReason)
		Info("Choice[%d] Message Role: %s", i, choice.Message.Role)
		if choice.Message.Content != nil && choice.Message.Content.StringValue != nil {
			content := *choice.Message.Content.StringValue
			if len(content) > 500 {
				Info("Choice[%d] Message Content (前500字符): %s...", i, content)
				Debug("Choice[%d] 完整 Message Content:\n%s", i, content)
			} else {
				Info("Choice[%d] Message Content:\n%s", i, content)
			}
		}
	}
	Info("=======================================")

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

	Debug("消息 Role: %s", msg.Role)

	if msg.Content.StringValue != nil {
		result := *msg.Content.StringValue
		Info("成功提取消息内容，长度=%d", len(result))
		if len(result) > 500 {
			Debug("完整消息内容:\n%s", result)
		}
		return result, nil
	}

	Error("不支持的消息内容类型")
	return "", fmt.Errorf("不支持的消息内容类型")
}

// parseSplitResponse 解析拆分响应
func parseSplitResponse(content string) (*SplitParagraphResult, error) {
	Debug("LLM 完整响应:\n%s", content)

	// 首先尝试新的响应格式（new_characters + update_characters）
	var responseV2 SplitParagraphResponseV2
	if err := json.Unmarshal([]byte(content), &responseV2); err == nil && len(responseV2.Paragraphs) > 0 {
		// 合并新角色和更新角色
		var allCharacters []LLMCharacter
		allCharacters = append(allCharacters, responseV2.NewCharacters...)
		allCharacters = append(allCharacters, responseV2.UpdateCharacters...)
		Debug("JSON V2 解析成功，段落数: %d, 新角色数: %d, 更新角色数: %d",
			len(responseV2.Paragraphs), len(responseV2.NewCharacters), len(responseV2.UpdateCharacters))
		return &SplitParagraphResult{
			Paragraphs: responseV2.Paragraphs,
			Characters: allCharacters,
		}, nil
	}

	// 尝试旧的响应格式
	var response SplitParagraphResponse
	if err := json.Unmarshal([]byte(content), &response); err == nil {
		Debug("JSON 直接解析成功，段落数: %d, 角色数: %d", len(response.Paragraphs), len(response.Characters))
		return &SplitParagraphResult{
			Paragraphs: response.Paragraphs,
			Characters: response.Characters,
		}, nil
	}

	// 尝试提取 JSON 部分
	firstBrace := strings.Index(content, "{")
	lastBrace := strings.LastIndex(content, "}")
	if firstBrace >= 0 && lastBrace > firstBrace {
		jsonStr := content[firstBrace : lastBrace+1]
		Debug("尝试提取 JSON 部分:\n%s", jsonStr)

		// 先尝试V2格式
		if err := json.Unmarshal([]byte(jsonStr), &responseV2); err == nil && len(responseV2.Paragraphs) > 0 {
			var allCharacters []LLMCharacter
			allCharacters = append(allCharacters, responseV2.NewCharacters...)
			allCharacters = append(allCharacters, responseV2.UpdateCharacters...)
			Debug("JSON V2 提取解析成功，段落数: %d, 新角色数: %d, 更新角色数: %d",
				len(responseV2.Paragraphs), len(responseV2.NewCharacters), len(responseV2.UpdateCharacters))
			return &SplitParagraphResult{
				Paragraphs: responseV2.Paragraphs,
				Characters: allCharacters,
			}, nil
		}

		// 再尝试旧格式
		if err := json.Unmarshal([]byte(jsonStr), &response); err == nil {
			Debug("JSON 提取解析成功，段落数: %d, 角色数: %d", len(response.Paragraphs), len(response.Characters))
			return &SplitParagraphResult{
				Paragraphs: response.Paragraphs,
				Characters: response.Characters,
			}, nil
		}
	}

	Error("LLM 响应解析失败，完整响应:\n%s", content)
	return nil, fmt.Errorf("解析 LLM 响应失败，请检查日志")
}
