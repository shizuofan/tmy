package utils

import (
	"bufio"
	"bytes"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"
)

// TTSConfig TTS配置
type TTSConfig struct {
	APIKey   string `json:"apiKey"`
	Endpoint string `json:"endpoint"`
	AppID    string `json:"appId"`
	Token    string `json:"token"`
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
		Endpoint: "https://openspeech.bytedance.com/api/v3/tts/unidirectional",
		AppID:    "",
		Token:    "",
	}
}

// TTSRequest 语音合成请求
type TTSRequest struct {
	AppID      string    `json:"app_id"`
	Token      string    `json:"token"`
	Cluster    string    `json:"cluster"`
	User       string    `json:"user"`
	VoiceType  string    `json:"voice_type"`
	Text       string    `json:"text"`
	Emotion    string    `json:"emotion,omitempty"`
	SpeedRatio float64   `json:"speed_ratio,omitempty"`
	Params     TTSParams `json:"params,omitempty"`
}

// TTSParams TTS额外参数
type TTSParams struct {
	WithTimestamp bool `json:"with_timestamp,omitempty"`
}

// TTSStreamResponse TTS流式响应
type TTSStreamResponse struct {
	Code     int                 `json:"code"`
	Message  string              `json:"message"`
	Data     string              `json:"data"`
	Sentence interface{}         `json:"sentence,omitempty"`
	Usage    map[string]interface{} `json:"usage,omitempty"`
}

// SynthesizeAudioResult 语音合成结果
type SynthesizeAudioResult struct {
	AudioData []byte
	Duration  float64
}

// SynthesizeAudio 合成音频
func (c *TTSClient) SynthesizeAudio(text string, voiceID string, emotion string, speed float64) (*SynthesizeAudioResult, error) {
	Info("TTS合成开始: voiceID=%s, emotion=%s, speed=%.2f, textLength=%d", voiceID, emotion, speed, len(text))
	Debug("TTS配置: AppID=****%s, Endpoint=%s", maskAPIKey(c.config.AppID), c.config.Endpoint)

	if c.config.AppID == "" {
		Error("TTS配置不完整: AppID为空")
		return nil, fmt.Errorf("TTS配置未完成，请先配置App ID")
	}
	if c.config.Token == "" {
		Error("TTS配置不完整: Token为空")
		return nil, fmt.Errorf("TTS配置未完成，请先配置Access Token")
	}

	if text == "" {
		Error("TTS文本为空")
		return nil, fmt.Errorf("合成文本不能为空")
	}

	if voiceID == "" {
		Error("TTS音色ID为空")
		return nil, fmt.Errorf("音色ID不能为空")
	}

	result, err := c.callVolcengineTTS(text, voiceID, emotion, speed)
	if err != nil {
		Error("火山引擎TTS调用失败: %v", err)
		return nil, err
	}

	Info("TTS合成成功: audioSize=%d bytes", len(result.AudioData))
	return result, nil
}

// callVolcengineTTS 调用火山引擎TTS API (v3版本，流式响应)
func (c *TTSClient) callVolcengineTTS(text string, voiceID string, emotion string, speed float64) (*SynthesizeAudioResult, error) {
	url := c.config.Endpoint

	audioParams := map[string]interface{}{
		"format":       "mp3",
		"sample_rate":  24000,
	}

	if emotion != "" && emotion != "neutral" {
		audioParams["emotion"] = emotion
		audioParams["emotion_scale"] = 4
	}

	if speed != 1.0 {
		audioParams["speech_rate"] = convertSpeed(speed)
	}

	requestBody := map[string]interface{}{
		"user": map[string]interface{}{
			"uid": "12345",
		},
		"req_params": map[string]interface{}{
			"text":         text,
			"speaker":      voiceID,
			"audio_params": audioParams,
		},
	}

	jsonData, err := json.Marshal(requestBody)
	if err != nil {
		return nil, fmt.Errorf("序列化请求失败: %w", err)
	}

	Debug("TTS请求: %s", string(jsonData))

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, fmt.Errorf("创建请求失败: %w", err)
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-Api-App-Id", c.config.AppID)
	req.Header.Set("X-Api-Access-Key", c.config.Token)
	req.Header.Set("X-Api-Resource-Id", "seed-tts-2.0")
	req.Header.Set("X-Api-Request-Id", generateReqID())
	req.Header.Set("Connection", "keep-alive")

	Info("TTS完整请求:")
	Info("  URL: %s", url)
	Info("  Method: POST")
	Info("  Headers:")
	Info("    Content-Type: %s", req.Header.Get("Content-Type"))
	Info("    X-Api-App-Id: %s", req.Header.Get("X-Api-App-Id"))
	Info("    X-Api-Access-Key: ****%s", maskAPIKey(req.Header.Get("X-Api-Access-Key")))
	Info("    X-Api-Resource-Id: %s", req.Header.Get("X-Api-Resource-Id"))
	Info("    X-Api-Request-Id: %s", req.Header.Get("X-Api-Request-Id"))
	Info("    Connection: %s", req.Header.Get("Connection"))
	Info("  Body: %s", string(jsonData))

	resp, err := c.client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("发送请求失败: %w", err)
	}
	defer resp.Body.Close()

	// 打印响应头和logid
	Info("TTS响应:")
	Info("  Status: %d", resp.StatusCode)
	Info("  X-Tt-Logid: %s", resp.Header.Get("X-Tt-Logid"))

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		Error("API请求失败，响应: %s", string(body))
		return nil, fmt.Errorf("API请求失败，状态码: %d", resp.StatusCode)
	}

	// 用于存储音频数据
	var audioData []byte
	scanner := bufio.NewScanner(resp.Body)

	for scanner.Scan() {
		line := scanner.Text()
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		Debug("TTS流式响应行: %s", line)

		var streamResp TTSStreamResponse
		if err := json.Unmarshal([]byte(line), &streamResp); err != nil {
			Warn("解析流式响应行失败: %v, line: %s", err, line)
			continue
		}

		// 处理不同类型的响应
		switch {
		case streamResp.Code == 0 && streamResp.Data != "":
			// 音频数据块
			chunkAudio, err := base64.StdEncoding.DecodeString(streamResp.Data)
			if err != nil {
				Warn("解码音频数据块失败: %v", err)
				continue
			}
			audioData = append(audioData, chunkAudio...)
			Debug("收到音频数据块: %d bytes", len(chunkAudio))

		case streamResp.Code == 0 && streamResp.Sentence != nil:
			// 句子信息
			Debug("收到句子信息: %v", streamResp.Sentence)

		case streamResp.Code == 20000000:
			// 合成完成
			Info("TTS合成完成")
			if streamResp.Usage != nil {
				Debug("Usage: %v", streamResp.Usage)
			}
			goto Complete

		case streamResp.Code > 0:
			// 错误
			Error("TTS API返回错误: code=%d, message=%s", streamResp.Code, streamResp.Message)
			return nil, fmt.Errorf("TTS API返回错误: code=%d, message=%s", streamResp.Code, streamResp.Message)
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, fmt.Errorf("读取流式响应失败: %w", err)
	}

Complete:
	if len(audioData) == 0 {
		return nil, fmt.Errorf("未收到音频数据")
	}

	Info("TTS流式合成完成，总音频大小: %d bytes", len(audioData))

	return &SynthesizeAudioResult{
		AudioData: audioData,
		Duration:  0,
	}, nil
}

// convertSpeed 将0.5-2.0范围的速度转换为v3 API需要的格式
func convertSpeed(speed float64) int {
	if speed <= 0.5 {
		return -50
	}
	if speed >= 2.0 {
		return 100
	}
	return int((speed - 1.0) * 100)
}

// SaveAudioToFile 保存音频到文件
func (c *TTSClient) SaveAudioToFile(audioData []byte, outputPath string) error {
	Info("保存音频文件: %s", outputPath)

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

func generateReqID() string {
	return fmt.Sprintf("tmy_%d", time.Now().UnixNano())
}
