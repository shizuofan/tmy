package controllers

import (
	"tmy2/backend/models"
	"tmy2/backend/services"
	"tmy2/backend/utils"
)

// ChapterController 章节控制器
type ChapterController struct {
	service *services.ChapterService
}

// NewChapterController 创建章节控制器
func NewChapterController() *ChapterController {
	return &ChapterController{
		service: services.NewChapterService(),
	}
}

// SetLLMConfig 设置 LLM 配置
func (c *ChapterController) SetLLMConfig(apiKey, endpoint, modelName string) {
	c.service.SetLLMConfig(apiKey, endpoint, modelName)
}

// GetLLMConfig 获取 LLM 配置
func (c *ChapterController) GetLLMConfig() utils.LLMConfig {
	return c.service.GetLLMConfig()
}

// SetTTSConfig 设置 TTS 配置
func (c *ChapterController) SetTTSConfig(apiKey, endpoint, appID, token string) {
	c.service.SetTTSConfig(apiKey, endpoint, appID, token)
}

// GetTTSConfig 获取 TTS 配置
func (c *ChapterController) GetTTSConfig() utils.TTSConfig {
	return c.service.GetTTSConfig()
}

// GenerateParagraphAudio 生成单个段落的音频
func (c *ChapterController) GenerateParagraphAudio(paragraphID int64) (*models.Paragraph, error) {
	return c.service.GenerateParagraphAudio(paragraphID)
}

// GenerateBatchAudio 批量生成段落音频
func (c *ChapterController) GenerateBatchAudio(paragraphIDs []int64) ([]*models.Paragraph, error) {
	return c.service.GenerateBatchAudio(paragraphIDs)
}

// GenerateChapterAudio 生成整个章节的音频
func (c *ChapterController) GenerateChapterAudio(chapterID int64) ([]*models.Paragraph, error) {
	return c.service.GenerateChapterAudio(chapterID)
}

// CreateChapter 创建章节
func (c *ChapterController) CreateChapter(projectID int64, title, content string) (int64, error) {
	return c.service.CreateChapter(projectID, title, content)
}

// GetChapters 获取工程章节列表
func (c *ChapterController) GetChapters(projectID int64) ([]*models.Chapter, error) {
	return c.service.GetChapters(projectID)
}

// GetChapter 获取章节详情（包含段落）
func (c *ChapterController) GetChapter(id int64) (*models.Chapter, error) {
	return c.service.GetChapter(id)
}

// UpdateChapter 更新章节
func (c *ChapterController) UpdateChapter(id int64, title, content string) error {
	return c.service.UpdateChapter(id, title, content)
}

// DeleteChapter 删除章节
func (c *ChapterController) DeleteChapter(id int64) error {
	return c.service.DeleteChapter(id)
}

// ReorderChapters 调整章节顺序
func (c *ChapterController) ReorderChapters(projectID int64, chapterIDs []int64) error {
	return c.service.ReorderChapters(projectID, chapterIDs)
}

// CreateParagraph 创建段落
func (c *ChapterController) CreateParagraph(chapterID int64, content, speaker, tone, voiceID string, speed float64) (int64, error) {
	return c.service.CreateParagraph(chapterID, content, speaker, tone, voiceID, speed)
}

// GetParagraphs 获取章节的段落列表
func (c *ChapterController) GetParagraphs(chapterID int64) ([]*models.Paragraph, error) {
	return c.service.GetParagraphs(chapterID)
}

// GetParagraph 获取段落详情
func (c *ChapterController) GetParagraph(id int64) (*models.Paragraph, error) {
	return c.service.GetParagraph(id)
}

// UpdateParagraph 更新段落
func (c *ChapterController) UpdateParagraph(id int64, content, speaker, tone, voiceID string, speed float64, audioPath string, audioData string, duration float64, orderIndex int) error {
	return c.service.UpdateParagraph(id, content, speaker, tone, voiceID, speed, audioPath, audioData, duration, orderIndex)
}

// DeleteParagraph 删除段落
func (c *ChapterController) DeleteParagraph(id int64) error {
	return c.service.DeleteParagraph(id)
}

// SplitParagraph 调用 LLM 拆分章节文本为段落，并保存到数据库
func (c *ChapterController) SplitParagraph(chapterID int64) ([]*models.Paragraph, error) {
	return c.service.SplitParagraph(chapterID)
}

// SplitParagraphPreview 调用 LLM 拆分章节文本为段落（仅预览，不保存）
func (c *ChapterController) SplitParagraphPreview(content string) ([]*models.Paragraph, error) {
	return c.service.SplitParagraphPreview(content)
}
