package services

import (
	"fmt"

	"tmy2/backend/models"
	"tmy2/backend/repositories"
	"tmy2/backend/utils"
)

// ChapterService 章节服务
type ChapterService struct {
	repo      repositories.ChapterRepository
	llmClient *utils.LLMClient
	llmConfig utils.LLMConfig
}

// NewChapterService 创建章节服务
func NewChapterService() *ChapterService {
	config := utils.DefaultLLMConfig()
	return &ChapterService{
		repo:      repositories.NewChapterRepository(),
		llmClient: utils.NewLLMClient(config),
		llmConfig: config,
	}
}

// SetLLMConfig 设置 LLM 配置
func (s *ChapterService) SetLLMConfig(apiKey, endpoint, modelName string) {
	s.llmConfig = utils.LLMConfig{
		APIKey:    apiKey,
		Endpoint:  endpoint,
		ModelName: modelName,
	}
	s.llmClient = utils.NewLLMClient(s.llmConfig)
}

// GetLLMConfig 获取 LLM 配置
func (s *ChapterService) GetLLMConfig() utils.LLMConfig {
	return s.llmConfig
}

// CreateChapter 创建章节
func (s *ChapterService) CreateChapter(projectID int64, title, content string) (int64, error) {
	chapters, err := s.repo.GetByProjectID(projectID)
	if err != nil {
		return 0, err
	}

	chapter := &repositories.Chapter{
		ProjectID:  projectID,
		Title:      title,
		Content:    content,
		OrderIndex: len(chapters),
	}
	if err := s.repo.Create(chapter); err != nil {
		return 0, err
	}
	return chapter.ID, nil
}

// GetChapters 获取工程章节列表
func (s *ChapterService) GetChapters(projectID int64) ([]*models.Chapter, error) {
	cs, err := s.repo.GetByProjectID(projectID)
	if err != nil {
		return nil, err
	}
	return toModelsChapterList(cs), nil
}

// GetChapter 获取章节详情（包含段落）
func (s *ChapterService) GetChapter(id int64) (*models.Chapter, error) {
	chapter, err := s.repo.GetByID(id)
	if err != nil {
		return nil, err
	}
	if chapter == nil {
		return nil, nil
	}

	result := toModelsChapter(chapter)
	paragraphs, err := s.repo.GetParagraphsByChapterID(id)
	if err == nil {
		result.ParagraphList = toModelsParagraphArray(paragraphs)
	}

	return result, nil
}

// UpdateChapter 更新章节
func (s *ChapterService) UpdateChapter(id int64, title, content string) error {
	chapter, err := s.repo.GetByID(id)
	if err != nil {
		return err
	}
	if chapter == nil {
		return fmt.Errorf("chapter not found")
	}

	chapter.Title = title
	chapter.Content = content
	return s.repo.Update(chapter)
}

// DeleteChapter 删除章节
func (s *ChapterService) DeleteChapter(id int64) error {
	return s.repo.Delete(id)
}

// ReorderChapters 调整章节顺序
func (s *ChapterService) ReorderChapters(projectID int64, chapterIDs []int64) error {
	return s.repo.ReorderChapters(projectID, chapterIDs)
}

// CreateParagraph 创建段落
func (s *ChapterService) CreateParagraph(chapterID int64, content, speaker, tone, voiceID string, speed float64) (int64, error) {
	paragraphs, err := s.repo.GetParagraphsByChapterID(chapterID)
	if err != nil {
		return 0, err
	}

	paragraph := &repositories.Paragraph{
		ChapterID:  chapterID,
		Content:    content,
		Speaker:    speaker,
		Tone:       tone,
		VoiceID:    voiceID,
		Speed:      speed,
		OrderIndex: len(paragraphs),
	}
	if err := s.repo.CreateParagraph(paragraph); err != nil {
		return 0, err
	}
	return paragraph.ID, nil
}

// GetParagraphs 获取章节的段落列表
func (s *ChapterService) GetParagraphs(chapterID int64) ([]*models.Paragraph, error) {
	ps, err := s.repo.GetParagraphsByChapterID(chapterID)
	if err != nil {
		return nil, err
	}
	return toModelsParagraphList(ps), nil
}

// GetParagraph 获取段落详情
func (s *ChapterService) GetParagraph(id int64) (*models.Paragraph, error) {
	p, err := s.repo.GetParagraphByID(id)
	if err != nil {
		return nil, err
	}
	return toModelsParagraph(p), nil
}

// UpdateParagraph 更新段落
func (s *ChapterService) UpdateParagraph(id int64, content, speaker, tone, voiceID string, speed float64, audioPath string, duration float64, orderIndex int) error {
	paragraph, err := s.repo.GetParagraphByID(id)
	if err != nil {
		return err
	}
	if paragraph == nil {
		return fmt.Errorf("paragraph not found")
	}

	paragraph.Content = content
	paragraph.Speaker = speaker
	paragraph.Tone = tone
	paragraph.VoiceID = voiceID
	paragraph.Speed = speed
	paragraph.AudioPath = audioPath
	paragraph.Duration = duration
	paragraph.OrderIndex = orderIndex
	return s.repo.UpdateParagraph(paragraph)
}

// DeleteParagraph 删除段落
func (s *ChapterService) DeleteParagraph(id int64) error {
	return s.repo.DeleteParagraph(id)
}

// SplitParagraph 调用 LLM 拆分章节文本为段落，并保存到数据库
func (s *ChapterService) SplitParagraph(chapterID int64) ([]*models.Paragraph, error) {
	chapter, err := s.repo.GetByID(chapterID)
	if err != nil {
		return nil, err
	}
	if chapter == nil {
		return nil, fmt.Errorf("chapter not found")
	}

	if chapter.Content == "" {
		return nil, fmt.Errorf("章节内容为空")
	}

	llmParagraphs, err := s.llmClient.SplitParagraph(chapter.Content)
	if err != nil {
		return nil, fmt.Errorf("LLM 拆分失败: %w", err)
	}

	existingParagraphs, err := s.repo.GetParagraphsByChapterID(chapterID)
	if err == nil {
		for _, p := range existingParagraphs {
			_ = s.repo.DeleteParagraph(p.ID)
		}
	}

	result := make([]*models.Paragraph, 0, len(llmParagraphs))
	for i, llmP := range llmParagraphs {
		paragraph := &repositories.Paragraph{
			ChapterID:  chapterID,
			Content:    llmP.Content,
			Speaker:    llmP.Speaker,
			Tone:       llmP.Tone,
			VoiceID:    "",
			Speed:      models.DefSpeed,
			AudioPath:  "",
			Duration:   0,
			OrderIndex: i,
		}
		if err := s.repo.CreateParagraph(paragraph); err != nil {
			return nil, fmt.Errorf("创建段落失败: %w", err)
		}
		result = append(result, toModelsParagraph(paragraph))
	}

	return result, nil
}

// SplitParagraphPreview 调用 LLM 拆分章节文本为段落（仅预览，不保存）
func (s *ChapterService) SplitParagraphPreview(content string) ([]*models.Paragraph, error) {
	if content == "" {
		return nil, fmt.Errorf("内容为空")
	}

	llmParagraphs, err := s.llmClient.SplitParagraph(content)
	if err != nil {
		return nil, fmt.Errorf("LLM 拆分失败: %w", err)
	}

	result := make([]*models.Paragraph, 0, len(llmParagraphs))
	for i, llmP := range llmParagraphs {
		result = append(result, &models.Paragraph{
			Content:    llmP.Content,
			Speaker:    llmP.Speaker,
			Tone:       llmP.Tone,
			VoiceID:    "",
			Speed:      models.DefSpeed,
			AudioPath:  "",
			Duration:   0,
			OrderIndex: i,
		})
	}

	return result, nil
}

// ========== 模型转换方法 ==========

func toRepoChapter(c *models.Chapter) *repositories.Chapter {
	if c == nil {
		return nil
	}
	return &repositories.Chapter{
		ID:         c.ID,
		ProjectID:  c.ProjectID,
		Title:      c.Title,
		Content:    c.Content,
		OrderIndex: c.OrderIndex,
		CreatedAt:  c.CreatedAt,
		UpdatedAt:  c.UpdatedAt,
	}
}

func toModelsChapter(c *repositories.Chapter) *models.Chapter {
	if c == nil {
		return nil
	}
	return &models.Chapter{
		ID:            c.ID,
		ProjectID:     c.ProjectID,
		Title:         c.Title,
		Content:       c.Content,
		OrderIndex:    c.OrderIndex,
		ParagraphList: []models.Paragraph{},
		CreatedAt:     c.CreatedAt,
		UpdatedAt:     c.UpdatedAt,
	}
}

func toModelsChapterList(cs []*repositories.Chapter) []*models.Chapter {
	result := make([]*models.Chapter, len(cs))
	for i, c := range cs {
		result[i] = toModelsChapter(c)
	}
	return result
}

func toRepoParagraph(p *models.Paragraph) *repositories.Paragraph {
	if p == nil {
		return nil
	}
	return &repositories.Paragraph{
		ID:         p.ID,
		ChapterID:  p.ChapterID,
		Content:    p.Content,
		Speaker:    p.Speaker,
		Tone:       p.Tone,
		VoiceID:    p.VoiceID,
		Speed:      p.Speed,
		AudioPath:  p.AudioPath,
		Duration:   p.Duration,
		OrderIndex: p.OrderIndex,
		CreatedAt:  p.CreatedAt,
		UpdatedAt:  p.UpdatedAt,
	}
}

func toModelsParagraph(p *repositories.Paragraph) *models.Paragraph {
	if p == nil {
		return nil
	}
	return &models.Paragraph{
		ID:         p.ID,
		ChapterID:  p.ChapterID,
		Content:    p.Content,
		Speaker:    p.Speaker,
		Tone:       p.Tone,
		VoiceID:    p.VoiceID,
		Speed:      p.Speed,
		AudioPath:  p.AudioPath,
		Duration:   p.Duration,
		OrderIndex: p.OrderIndex,
		CreatedAt:  p.CreatedAt,
		UpdatedAt:  p.UpdatedAt,
	}
}

func toModelsParagraphList(ps []*repositories.Paragraph) []*models.Paragraph {
	result := make([]*models.Paragraph, len(ps))
	for i, p := range ps {
		result[i] = toModelsParagraph(p)
	}
	return result
}

func toModelsParagraphArray(ps []*repositories.Paragraph) []models.Paragraph {
	result := make([]models.Paragraph, len(ps))
	for i, p := range ps {
		result[i] = *toModelsParagraph(p)
	}
	return result
}
