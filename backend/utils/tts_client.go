package utils

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

// TTSConfig TTS配置
type TTSConfig struct {
	APIKey   string `json:"apiKey"`
	Endpoint string `json:"endpoint"`
	AppID    string `json:"appId"`
}

// TTSClient 语音合成客户端
type TTSClient struct {
	config TTSConfig
	client *http.Client
}

// NewTTSClient 创建TTS客户端
func NewTTSClient(config TTSConfig) *TTSClient {
	return &TTSClient{
		config: config,
		client: &http.Client{
			Timeout: 60 * time.Second,
		},
	}
}

// DefaultTTSConfig 默认TTS配置
func DefaultTTSConfig() TTSConfig {
	return TTSConfig{
		APIKey:   "",
		Endpoint: "https://openspeech.bytedance.com/api/v1/tts",
		AppID:    "",
	}
}

// TTSRequest 语音合成请求
type TTSRequest struct {
	AppID      string      `json:"app_id"`
	Token      string      `json:"token"`
	Cluster    string      `json:"cluster"`
	User       string      `json:"user"`
	VoiceType  string      `json:"voice_type"`
	Text       string      `json:"text"`
	Emotion    string      `json:"emotion,omitempty"`
	SpeedRatio float64     `json:"speed_ratio,omitempty"`
	Params     TTSParams   `json:"params,omitempty"`
}

// TTSParams TTS额外参数
type TTSParams struct {
	WithTimestamp bool `json:"with_timestamp,omitempty"`
}

// TTSResponse 语音合成响应
type TTSResponse struct {
	ReqID    string `json:"reqid"`
	Code     int    `json:"code"`
	Message  string `json:"message"`
	Sequence int    `json:"sequence"`
	Data     string `json:"data"` // base64编码的音频数据
}

// SynthesizeAudioResult 语音合成结果
type SynthesizeAudioResult struct {
	AudioData []byte
	Duration  float64
}

// SynthesizeAudio 合成音频
func (c *TTSClient) SynthesizeAudio(text string, voiceID string, emotion string, speed float64) (*SynthesizeAudioResult, error) {
	Info("TTS合成开始: voiceID=%s, emotion=%s, speed=%.2f, textLength=%d", voiceID, emotion, speed, len(text))
	Debug("TTS配置: APIKey=****%s, Endpoint=%s", maskAPIKey(c.config.APIKey), c.config.Endpoint)

	if c.config.APIKey == "" {
		Error("TTS配置不完整: APIKey为空")
		return nil, fmt.Errorf("TTS配置未完成，请先配置API Key")
	}

	if text == "" {
		Error("TTS文本为空")
		return nil, fmt.Errorf("合成文本不能为空")
	}

	if voiceID == "" {
		Error("TTS音色ID为空")
		return nil, fmt.Errorf("音色ID不能为空")
	}

	// 使用火山引擎TTS API进行合成
	result, err := c.callVolcengineTTS(text, voiceID, emotion, speed)
	if err != nil {
		Error("火山引擎TTS调用失败: %v", err)
		return nil, err
	}

	Info("TTS合成成功: audioSize=%d bytes", len(result.AudioData))
	return result, nil
}

// callVolcengineTTS 调用火山引擎TTS API
func (c *TTSClient) callVolcengineTTS(text string, voiceID string, emotion string, speed float64) (*SynthesizeAudioResult, error) {
	// 构建请求URL
	url := fmt.Sprintf("%s?access_token=%s", c.config.Endpoint, c.config.APIKey)

	// 构建请求体
	requestBody := map[string]interface{}{
		"app": map[string]interface{}{
			"appid": c.config.AppID,
			"token": c.config.APIKey,
		},
		"user": map[string]interface{}{
			"uid": "tmy_user",
		},
		"audio": map[string]interface{}{
			"voice_type":  voiceID,
			"encoding":    "mp3",
			"speed_ratio": speed,
		},
		"request": map[string]interface{}{
			"reqid":         generateReqID(),
			"text":          text,
			"text_type":     "plain",
			"operation":     "query",
			"with_frontend": true,
		},
	}

	// 添加情感参数
	if emotion != "" && emotion != "neutral" {
		requestBody["audio"].(map[string]interface{})["emotion"] = emotion
	}

	jsonData, err := json.Marshal(requestBody)
	if err != nil {
		return nil, fmt.Errorf("序列化请求失败: %w", err)
	}

	Debug("TTS请求: %s", string(jsonData))

	// 发送HTTP请求
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, fmt.Errorf("创建请求失败: %w", err)
	}
	req.Header.Set("Content-Type", "application/json")

	resp, err := c.client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("发送请求失败: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("读取响应失败: %w", err)
	}

	Debug("TTS响应状态: %d, 响应长度: %d", resp.StatusCode, len(body))

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("API请求失败，状态码: %d, 响应: %s", resp.StatusCode, string(body))
	}

	// 解析响应
	var ttsResp struct {
		ReqID   string `json:"reqid"`
		Code    int    `json:"code"`
		Message string `json:"message"`
		Data    struct {
			Audio      string `json:"audio"`
			Duration   int    `json:"duration"`
			Attributes struct {
				TextLen int `json:"text_len"`
			} `json:"attributes"`
		} `json:"data"`
	}

	if err := json.Unmarshal(body, &ttsResp); err != nil {
		// 尝试另一种响应格式
		var ttsResp2 struct {
			ReqID   string `json:"reqid"`
			Code    int    `json:"code"`
			Message string `json:"message"`
			Data    string `json:"data"`
		}
		if err2 := json.Unmarshal(body, &ttsResp2); err2 == nil && ttsResp2.Code == 0 {
			// 解码base64音频数据
			audioData, err := base64.StdEncoding.DecodeString(ttsResp2.Data)
			if err != nil {
				return nil, fmt.Errorf("解码音频数据失败: %w", err)
			}
			return &SynthesizeAudioResult{
				AudioData: audioData,
				Duration:  0,
			}, nil
		}
		return nil, fmt.Errorf("解析响应失败: %w, 响应: %s", err, string(body))
	}

	if ttsResp.Code != 0 {
		return nil, fmt.Errorf("TTS API返回错误: code=%d, message=%s", ttsResp.Code, ttsResp.Message)
	}

	// 解码base64音频数据
	audioData, err := base64.StdEncoding.DecodeString(ttsResp.Data.Audio)
	if err != nil {
		return nil, fmt.Errorf("解码音频数据失败: %w", err)
	}

	// 计算音频时长（毫秒转秒）
	duration := float64(ttsResp.Data.Duration) / 1000.0

	return &SynthesizeAudioResult{
		AudioData: audioData,
		Duration:  duration,
	}, nil
}

// SaveAudioToFile 保存音频到文件
func (c *TTSClient) SaveAudioToFile(audioData []byte, outputPath string) error {
	Info("保存音频文件: %s", outputPath)

	// 确保目录存在
	dir := filepath.Dir(outputPath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return fmt.Errorf("创建目录失败: %w", err)
	}

	if err := os.WriteFile(outputPath, audioData, 0644); err != nil {
		return fmt.Errorf("写入文件失败: %w", err)
	}

	Info("音频文件保存成功: %s", outputPath)
	return nil
}

// generateReqID 生成请求ID
func generateReqID() string {
	return fmt.Sprintf("tmy_%d", time.Now().UnixNano())
}
