# 听墨语 - 外部 API 集成方案

## 概述

听墨语应用需要集成以下外部 API 来实现核心功能：

1. **火山引擎文本大模型**：用于小说文本分析
2. **火山引擎语音合成 API**：用于生成音频
3. **火山引擎音色库**：用于获取音色信息

## 火山引擎 API 集成

### 1. API 基础信息

**官方文档**：https://www.volcengine.com/docs/6561/1257584?lang=zh

### 2. API 认证

火山引擎 API 使用 AK/SK（访问密钥 ID/私有访问密钥）进行认证。

#### 2.1 认证方式

```go
// 火山引擎 API 认证配置
type VolcengineConfig struct {
	AK         string `json:"ak"`         // 访问密钥 ID
	SK         string `json:"sk"`         // 私有访问密钥
	Region     string `json:"region"`     // 地域，如：cn-north-1
	Service    string `json:"service"`    // 服务名称，如：tts
	SigningAlg string `json:"signingAlg"` // 签名算法，如：HMAC-SHA256
}

// 签名生成函数
func GenerateSignature(config *VolcengineConfig, method string, uri string, headers map[string]string, query map[string]string, body []byte) (string, error) {
	// 实现火山引擎 API 签名逻辑
	// 参考：https://www.volcengine.com/docs/6561/1257584#authentication
}
```

#### 2.2 配置存储

- 应用首次启动时，引导用户输入 AK/SK
- 加密存储在本地配置文件中
- 提供配置界面允许用户修改

### 3. 文本大模型集成

用于分析小说文本，识别角色、情感和段落拆分。

#### 3.1 API 接口

**接口地址**：https://ark.cn-beijing.volces.com/api/v3/chat/completions

**请求示例**：

```go
type TextAnalysisRequest struct {
	Model            string        `json:"model"`
	Messages         []Message     `json:"messages"`
	Temperature      float64       `json:"temperature"`
	TopP             float64       `json:"top_p"`
	MaxTokens        int           `json:"max_tokens"`
	Stop             []string      `json:"stop,omitempty"`
	Stream           bool          `json:"stream"`
}

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}
```

#### 3.2 响应解析

```go
type TextAnalysisResponse struct {
	Choices []struct {
		Index   int    `json:"index"`
		Message Message `json:"message"`
		FinishReason string `json:"finish_reason"`
	} `json:"choices"`
	Usage struct {
		PromptTokens     int `json:"prompt_tokens"`
		CompletionTokens int `json:"completion_tokens"`
		TotalTokens      int `json:"total_tokens"`
	} `json:"usage"`
}
```

#### 3.3 分析模板

```text
请分析以下小说文本，完成以下任务：
1. 识别并列出所有角色（包括姓名、身份、角色简介）
2. 按逻辑段落拆分文本，并识别每个段落的说话角色和情感类型
3. 提取章节标题

文本内容：
{{小说文本}}
```

### 4. 语音合成 API 集成

用于生成单个段落或批量生成音频。

#### 4.1 API 接口

**接口地址**：https://tts-api.volcengine.com/?Action=SubmitTask

**请求参数**：

```go
type TTSRequest struct {
	Text           string  `json:"Text"`
	VoiceType      string  `json:"VoiceType"`
	Emotion        string  `json:"Emotion"`
	Speed          float64 `json:"Speed"`
	Volume         float64 `json:"Volume"`
	Format         string  `json:"Format"`
	SampleRate     int     `json:"SampleRate"`
}
```

#### 4.2 响应解析

```go
type TTSResponse struct {
	ResponseMetadata struct {
		RequestId string `json:"RequestId"`
		Action    string `json:"Action"`
		Version   string `json:"Version"`
		Service   string `json:"Service"`
		Region    string `json:"Region"`
	} `json:"ResponseMetadata"`
	Result struct {
		TaskId string `json:"TaskId"`
	} `json:"Result"`
}
```

#### 4.3 音频查询

**接口地址**：https://tts-api.volcengine.com/?Action=GetTaskResult

**请求参数**：

```go
type TTSQueryRequest struct {
	TaskId string `json:"TaskId"`
}
```

**响应示例**：

```go
type TTSQueryResponse struct {
	ResponseMetadata struct {
		RequestId string `json:"RequestId"`
	} `json:"ResponseMetadata"`
	Result struct {
		Status       string `json:"Status"`
		AudioContent string `json:"AudioContent"`
	} `json:"Result"`
}
```

### 5. 音色库 API 集成

获取可用音色列表和属性。

#### 5.1 API 接口

**接口地址**：https://tts-api.volcengine.com/?Action=ListVoices

**请求参数**：

```go
type ListVoicesRequest struct {
	Language string `json:"Language,omitempty"`
}
```

#### 5.2 响应解析

```go
type ListVoicesResponse struct {
	ResponseMetadata struct {
		RequestId string `json:"RequestId"`
	} `json:"ResponseMetadata"`
	Result struct {
		Voices []struct {
			VoiceId          string   `json:"VoiceId"`
			Name             string   `json:"Name"`
			Description      string   `json:"Description"`
			SupportedEmotions []string `json:"SupportedEmotions"`
			Language         string   `json:"Language"`
		} `json:"Voices"`
	} `json:"Result"`
}
```

### 6. 错误处理和重试机制

#### 6.1 错误类型

```go
type APIError struct {
	Code      string `json:"Code"`
	Message   string `json:"Message"`
	RequestId string `json:"RequestId"`
}
```

#### 6.2 重试策略

```go
// 重试配置
type RetryConfig struct {
	MaxRetries    int           // 最大重试次数
	BaseDelay     time.Duration // 基础延迟
	MaxDelay      time.Duration // 最大延迟
	Exponential   bool          // 是否使用指数退避
	RetryableErrors []string    // 可重试的错误码列表
}

// 重试逻辑
func RetryWithBackoff(fn func() error, config *RetryConfig) error {
	var err error
	for i := 0; i < config.MaxRetries; i++ {
		err = fn()
		if err == nil {
			return nil
		}
		// 检查是否是可重试的错误
		if isRetryable(err, config.RetryableErrors) {
			delay := calculateDelay(i, config)
			time.Sleep(delay)
			continue
		}
		break
	}
	return err
}
```

### 7. 限流和计费

#### 7.1 限流处理

```go
// API 调用计数器
type APICounter struct {
	mu        sync.Mutex
	counters  map[string]int
	limits    map[string]int
	lastReset time.Time
}

func (c *APICounter) CheckAndIncrement(endpoint string) bool {
	c.mu.Lock()
	defer c.mu.Unlock()

	// 重置计数器（每小时）
	if time.Since(c.lastReset) > time.Hour {
		c.counters = make(map[string]int)
		c.lastReset = time.Now()
	}

	// 检查是否达到限制
	limit, exists := c.limits[endpoint]
	if !exists {
		limit = 1000 // 默认限制
	}

	count := c.counters[endpoint]
	if count >= limit {
		return false
	}

	c.counters[endpoint]++
	return true
}
```

#### 7.2 计费监控

```go
type BillingInfo struct {
	Date       time.Time `json:"date"`
	API        string    `json:"api"`
	TokensUsed int       `json:"tokens_used"`
	Cost       float64   `json:"cost"`
}
```

### 8. 测试和模拟

#### 8.1 测试环境配置

```go
type TestConfig struct {
	UseMockAPI   bool          // 是否使用模拟 API
	EnableLogging bool         // 是否启用详细日志
	SlowResponse bool          // 模拟慢响应
	ErrorRate    float64       // 错误率（0-1）
}
```

#### 8.2 模拟响应

```go
func MockTextAnalysisResponse(text string) *TextAnalysisResponse {
	// 生成模拟的文本分析响应
	return &TextAnalysisResponse{
		Choices: []struct {
			Index         int     `json:"index"`
			Message       Message `json:"message"`
			FinishReason string  `json:"finish_reason"`
		}{
			{
				Index: 0,
				Message: Message{
					Role:    "assistant",
					Content: `{"characters": [{"name": "张三", "description": "男主角"}], "paragraphs": [{"content": "你好", "speaker": "张三", "tone": "neutral"}]}`,
				},
				FinishReason: "stop",
			},
		},
	}
}
```

### 9. 性能优化

#### 9.1 缓存策略

```go
// 结果缓存
type APICache struct {
	cache  map[string]*CacheEntry
	mu     sync.RWMutex
	ttl    time.Duration
}

type CacheEntry struct {
	Data        interface{}
	Expiration time.Time
}

func (c *APICache) Get(key string) (interface{}, bool) {
	c.mu.RLock()
	defer c.mu.RUnlock()

	entry, exists := c.cache[key]
	if !exists {
		return nil, false
	}

	if time.Now().After(entry.Expiration) {
		return nil, false
	}

	return entry.Data, true
}

func (c *APICache) Set(key string, data interface{}) {
	c.mu.Lock()
	defer c.mu.Unlock()

	c.cache[key] = &CacheEntry{
		Data:        data,
		Expiration: time.Now().Add(c.ttl),
	}
}
```

#### 9.2 并发控制

```go
// 并发控制
type RateLimiter struct {
	requests   chan struct{}
	stopChan   chan struct{}
}

func NewRateLimiter(rate int, duration time.Duration) *RateLimiter {
	rl := &RateLimiter{
		requests: make(chan struct{}, rate),
		stopChan: make(chan struct{}),
	}

	// 定期补充令牌
	go func() {
		ticker := time.NewTicker(duration / time.Duration(rate))
		defer ticker.Stop()

		for {
			select {
			case <-ticker.C:
				select {
				case rl.requests <- struct{}{}:
				default:
				}
			case <-rl.stopChan:
				return
			}
		}
	}()

	return rl
}

func (rl *RateLimiter) Wait() error {
	select {
	case <-rl.requests:
		return nil
	case <-rl.stopChan:
		return errors.New("rate limiter stopped")
	}
}
```

### 10. 安全注意事项

#### 10.1 敏感信息保护

```go
// 敏感信息加密
func Encrypt(data []byte, key []byte) ([]byte, error) {
	block, err := aes.NewCipher(key)
	if err != nil {
		return nil, err
	}

	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return nil, err
	}

	nonce := make([]byte, gcm.NonceSize())
	if _, err := io.ReadFull(rand.Reader, nonce); err != nil {
		return nil, err
	}

	ciphertext := gcm.Seal(nonce, nonce, data, nil)
	return ciphertext, nil
}

func Decrypt(data []byte, key []byte) ([]byte, error) {
	block, err := aes.NewCipher(key)
	if err != nil {
		return nil, err
	}

	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return nil, err
	}

	nonceSize := gcm.NonceSize()
	if len(data) < nonceSize {
		return nil, errors.New("ciphertext too short")
	}

	nonce, ciphertext := data[:nonceSize], data[nonceSize:]
	plaintext, err := gcm.Open(nil, nonce, ciphertext, nil)
	if err != nil {
		return nil, err
	}

	return plaintext, nil
}
```

#### 10.2 请求验证

```go
func ValidateAPIRequest(request interface{}) error {
	// 验证请求参数
	err := validator.New().Struct(request)
	if err != nil {
		return fmt.Errorf("invalid request: %w", err)
	}
	return nil
}
```

### 11. 监控和诊断

#### 11.1 性能指标

```go
type PerformanceMetrics struct {
	API         string    `json:"api"`
	CallCount   int       `json:"call_count"`
	SuccessRate float64   `json:"success_rate"`
	AvailTime   float64   `json:"avail_time"`
}

func TrackPerformance(api string, err error) {
	// 记录性能指标
}
```

#### 11.2 日志记录

```go
type APILog struct {
	Timestamp   time.Time `json:"timestamp"`
	API         string    `json:"api"`
	RequestID   string    `json:"request_id"`
	Duration    time.Duration `json:"duration"`
	StatusCode  int       `json:"status_code"`
	Error       string    `json:"error,omitempty"`
}

func LogAPIRequest(request, response interface{}, duration time.Duration, err error) {
	// 记录 API 请求和响应
}
```

### 12. 版本管理

#### 12.1 API 版本控制

```go
func GetAPIVersion(api string) string {
	// 根据 API 名称返回对应的版本号
	switch api {
	case "text-analysis":
		return "v3"
	case "tts":
		return "v1"
	default:
		return "v1"
	}
}
```

#### 12.2 向后兼容性

```go
func HandleLegacyResponse(response interface{}) interface{} {
	// 处理旧版本 API 响应
	return response
}
```

### 13. 集成测试

#### 13.1 端到端测试

```go
func TestEndToEnd(t *testing.T) {
	// 端到端测试
	t.Run("TextAnalysis", func(t *testing.T) {
		// 测试文本分析
	})

	t.Run("AudioGeneration", func(t *testing.T) {
		// 测试音频生成
	})

	t.Run("BatchProcessing", func(t *testing.T) {
		// 测试批量处理
	})
}
```

#### 13.2 压力测试

```go
func BenchmarkTextAnalysis(b *testing.B) {
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		api.AnalyzeText("测试文本")
	}
	b.StopTimer()
}
```

通过以上集成方案，听墨语应用可以稳定、高效地与火山引擎 API 进行通信，提供可靠的文本分析和语音合成功能。
