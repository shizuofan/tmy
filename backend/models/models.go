package models

import (
	"time"
)

// Project 工程模型
type Project struct {
	ID               int64               `json:"id"`
	Name             string              `json:"name"`
	Description      string              `json:"description"`
	LLMApiKey        string              `json:"llmApiKey"`        // 文本大模型 API Key
	TTSApiKey        string              `json:"ttsApiKey"`        // 语音大模型 API Key
	TTSAppID         string              `json:"ttsAppId"`         // 语音大模型 App ID
	TTSToken         string              `json:"ttsToken"`         // 语音大模型 Token
	KnownCharacters  []CharacterInfo     `json:"knownCharacters"`  // 已知角色列表
	NarratorVoiceID  string              `json:"narratorVoiceId"`  // 旁白音色ID
	CreatedAt        time.Time           `json:"createdAt"`
	UpdatedAt        time.Time           `json:"updatedAt"`
}

// CharacterInfo 角色信息（用于已知角色列表）
type CharacterInfo struct {
	Name           string   `json:"name"`           // 角色名称
	Description    string   `json:"description"`    // 角色简介/关系描述
	VoiceID        string   `json:"voiceId"`        // 音色ID
	Gender         string   `json:"gender"`         // 性别: male/female/unknown
	Age            string   `json:"age"`            // 年龄: child/teen/adult/senior/unknown
	Aliases        []string `json:"aliases"`        // 别名/外号列表
	ChapterNames   []string `json:"chapterNames"`   // 出现的章节名称列表
	LastSeenAt     int64    `json:"lastSeenAt"`     // 最后发现时间（Unix时间戳）
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
	Content    string    `json:"content"`   // 文本内容
	Speaker    string    `json:"speaker"`   // 说话角色
	Tone       string    `json:"tone"`      // 情感参数
	VoiceID    string    `json:"voiceId"`   // 音色ID
	Speed      float64   `json:"speed"`     // 语速
	AudioPath  string    `json:"audioPath"` // 音频文件路径
	AudioData  string    `json:"audioData"` // 音频base64数据
	Duration   float64   `json:"duration"`  // 音频时长
	OrderIndex int       `json:"orderIndex"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}

// Character 角色模型
type Character struct {
	ID           int64     `json:"id"`
	ProjectID    int64     `json:"projectId"`
	Name         string    `json:"name"`
	Description  string    `json:"description"`
	VoiceID      string    `json:"voiceId"` // 默认音色
	Gender       string    `json:"gender"`  // 性别: male/female/unknown
	Age          string    `json:"age"`     // 年龄: child/teen/adult/senior/unknown
	Aliases      []string  `json:"aliases"` // 别名/外号列表
	ChapterNames []string  `json:"chapterNames"` // 出现的章节名称列表
	LastSeenAt   int64     `json:"lastSeenAt"`   // 最后发现时间（Unix时间戳）
	CreatedAt    time.Time `json:"createdAt"`
	UpdatedAt    time.Time `json:"updatedAt"`
}

// Voice 音色模型
type Voice struct {
	ID             string   `json:"id"`
	Name           string   `json:"name"`
	Description    string   `json:"description"`
	SupportedTones []string `json:"supportedTones"`
	Language       string   `json:"language"`
	Gender         string   `json:"gender"`
	Category       string   `json:"category"`
}

// 情感类型常量 - 中文音色
const (
	ToneNeutral      = "neutral"      // 中性
	ToneHappy        = "happy"        // 开心
	ToneSad          = "sad"          // 悲伤
	ToneAngry        = "angry"        // 生气
	ToneSurprised    = "surprised"    // 惊讶
	ToneFear         = "fear"         // 恐惧
	ToneHate         = "hate"         // 厌恶
	ToneExcited      = "excited"      // 激动
	ToneColdness     = "coldness"     // 冷漠
	ToneDepressed    = "depressed"    // 沮丧
	ToneLoveyDovey   = "lovey-dovey"  // 撒娇
	ToneShy          = "shy"          // 害羞
	ToneComfort      = "comfort"      // 安慰鼓励
	ToneTension      = "tension"      // 咆哮/焦急
	ToneTender       = "tender"       // 温柔
	ToneStorytelling = "storytelling" // 讲故事/自然讲述
	ToneRadio        = "radio"        // 情感电台
	ToneMagnetic     = "magnetic"     // 磁性
	ToneAdvertising  = "advertising"  // 广告营销
	ToneVocalFry     = "vocal-fry"    // 气泡音
	ToneASMR         = "ASMR"         // 低语(ASMR)
	ToneNews         = "news"         // 新闻播报
	ToneEntertainment = "entertainment" // 娱乐八卦
	ToneDialect      = "dialect"      // 方言
)

// 情感类型常量 - 英文音色
const (
	ToneENNeutral     = "neutral"      // 中性
	ToneENHappy       = "happy"        // 愉悦
	ToneENAngry       = "angry"        // 愤怒
	ToneENSad         = "sad"          // 悲伤
	ToneENExcited     = "excited"      // 兴奋
	ToneENChat        = "chat"         // 对话/闲聊
	ToneENASMR        = "ASMR"         // 低语(ASMR)
	ToneENWarm        = "warm"         // 温暖
	ToneENAffectionate = "affectionate" // 深情
	ToneENAuthoritative = "authoritative" // 权威
)

// 获取所有中文情感参数列表
func GetAllChineseTones() []string {
	return []string{
		ToneNeutral,
		ToneHappy,
		ToneSad,
		ToneAngry,
		ToneSurprised,
		ToneFear,
		ToneHate,
		ToneExcited,
		ToneColdness,
		ToneDepressed,
		ToneLoveyDovey,
		ToneShy,
		ToneComfort,
		ToneTension,
		ToneTender,
		ToneStorytelling,
		ToneRadio,
		ToneMagnetic,
		ToneAdvertising,
		ToneVocalFry,
		ToneASMR,
		ToneNews,
		ToneEntertainment,
		ToneDialect,
	}
}

// 获取所有英文情感参数列表
func GetAllEnglishTones() []string {
	return []string{
		ToneENNeutral,
		ToneENHappy,
		ToneENAngry,
		ToneENSad,
		ToneENExcited,
		ToneENChat,
		ToneENASMR,
		ToneENWarm,
		ToneENAffectionate,
		ToneENAuthoritative,
	}
}

// 获取情感参数的中文名称映射
func GetToneNameMap() map[string]string {
	return map[string]string{
		// 中文情感
		ToneNeutral:      "中性",
		ToneHappy:        "开心",
		ToneSad:          "悲伤",
		ToneAngry:        "生气",
		ToneSurprised:    "惊讶",
		ToneFear:         "恐惧",
		ToneHate:         "厌恶",
		ToneExcited:      "激动",
		ToneColdness:     "冷漠",
		ToneDepressed:    "沮丧",
		ToneLoveyDovey:   "撒娇",
		ToneShy:          "害羞",
		ToneComfort:      "安慰鼓励",
		ToneTension:      "咆哮/焦急",
		ToneTender:       "温柔",
		ToneStorytelling: "讲故事/自然讲述",
		ToneRadio:        "情感电台",
		ToneMagnetic:     "磁性",
		ToneAdvertising:  "广告营销",
		ToneVocalFry:     "气泡音",
		ToneASMR:         "低语(ASMR)",
		ToneNews:         "新闻播报",
		ToneEntertainment: "娱乐八卦",
		ToneDialect:      "方言",
		// 英文情感
		ToneENChat:        "对话/闲聊",
		ToneENWarm:        "温暖",
		ToneENAffectionate: "深情",
		ToneENAuthoritative: "权威",
	}
}

// 支持的语速范围 (0.5-2.0 倍速)
const (
	MinSpeed = 0.5
	MaxSpeed = 2.0
	DefSpeed = 1.0
)
