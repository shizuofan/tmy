package models

import (
	"time"
)

// Project 工程模型
type Project struct {
	ID          int64     `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

// Chapter 章节模型
type Chapter struct {
	ID            int64       `json:"id"`
	ProjectID     int64       `json:"projectId"`
	Title         string      `json:"title"`
	Content       string      `json:"content"`
	OrderIndex    int         `json:"orderIndex"`
	ParagraphList []Paragraph `json:"paragraphList"` // 段落列表
	CreatedAt     time.Time   `json:"createdAt"`
	UpdatedAt     time.Time   `json:"updatedAt"`
}

// Paragraph 段落模型
type Paragraph struct {
	ID         int64     `json:"id"`
	ChapterID  int64     `json:"chapterId"`
	Content    string    `json:"content"`
	Speaker    string    `json:"speaker"`   // 说话角色
	Tone       string    `json:"tone"`      // 情感参数
	VoiceID    string    `json:"voiceId"`   // 音色ID
	Speed      float64   `json:"speed"`     // 语速
	AudioPath  string    `json:"audioPath"` // 音频文件路径
	Duration   float64   `json:"duration"`  // 音频时长
	OrderIndex int       `json:"orderIndex"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}

// Character 角色模型
type Character struct {
	ID          int64     `json:"id"`
	ProjectID   int64     `json:"projectId"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	VoiceID     string    `json:"voiceId"` // 默认音色
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

// Voice 音色模型
type Voice struct {
	ID             string   `json:"id"`
	Name           string   `json:"name"`
	Description    string   `json:"description"`
	SupportedTones []string `json:"supportedTones"`
	Language       string   `json:"language"`
}

// 情感类型常量
const (
	ToneNeutral   = "neutral"   // 中性
	ToneHappy     = "happy"     // 开心
	ToneSad       = "sad"       // 悲伤
	ToneAngry     = "angry"     // 愤怒
	ToneExcited   = "excited"   // 兴奋
	ToneFearful   = "fearful"   // 恐惧
	ToneSurprised = "surprised" // 惊讶
	ToneDisgusted = "disgusted" // 厌恶
)

// 支持的语速范围 (0.5-2.0 倍速)
const (
	MinSpeed = 0.5
	MaxSpeed = 2.0
	DefSpeed = 1.0
)
