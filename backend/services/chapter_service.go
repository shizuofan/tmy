package services

import (
	"context"
	"encoding/base64"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"tmy2/backend/models"
	"tmy2/backend/repositories"
	"tmy2/backend/utils"
)

// ChapterService 章节服务
type ChapterService struct {
	repo           repositories.ChapterRepository
	projectRepo    repositories.ProjectRepository
	projectService *ProjectService
	llmClient      *utils.LLMClient
	llmConfig      utils.LLMConfig
	ttsConfig      utils.TTSConfig
}

// NewChapterService 创建章节服务
func NewChapterService() *ChapterService {
	config := utils.DefaultLLMConfig()
	ttsConfig := utils.DefaultTTSConfig()
	return &ChapterService{
		repo:           repositories.NewChapterRepository(),
		projectRepo:    repositories.NewProjectRepository(),
		projectService: NewProjectService(),
		llmClient:      utils.NewLLMClient(config),
		llmConfig:      config,
		ttsConfig:      ttsConfig,
	}
}

// SetTTSConfig 设置TTS配置
func (s *ChapterService) SetTTSConfig(apiKey, endpoint, appID, token string) {
	s.ttsConfig = utils.TTSConfig{
		APIKey:   apiKey,
		Endpoint: endpoint,
		AppID:    appID,
		Token:    token,
	}
}

// GetTTSConfig 获取TTS配置
func (s *ChapterService) GetTTSConfig() utils.TTSConfig {
	return s.ttsConfig
}

// GenerateParagraphAudio 生成单个段落的音频
func (s *ChapterService) GenerateParagraphAudio(paragraphID int64) (*models.Paragraph, error) {
	utils.Info("开始生成段落音频: paragraphID=%d", paragraphID)

	// 获取段落信息
	paragraph, err := s.repo.GetParagraphByID(paragraphID)
	if err != nil {
		utils.Error("获取段落失败: paragraphID=%d, err=%v", paragraphID, err)
		return nil, fmt.Errorf("获取段落失败: %w", err)
	}
	if paragraph == nil {
		utils.Warn("段落不存在: paragraphID=%d", paragraphID)
		return nil, fmt.Errorf("段落不存在")
	}

	// 获取章节信息
	chapter, err := s.repo.GetByID(paragraph.ChapterID)
	if err != nil {
		utils.Error("获取章节失败: chapterID=%d, err=%v", paragraph.ChapterID, err)
		return nil, fmt.Errorf("获取章节失败: %w", err)
	}

	// 获取项目信息，获取TTS API Key
	project, err := s.projectRepo.GetByID(chapter.ProjectID)
	if err != nil {
		utils.Error("获取项目信息失败: projectID=%d, err=%v", chapter.ProjectID, err)
		return nil, fmt.Errorf("获取项目信息失败: %w", err)
	}
	if project == nil {
		utils.Warn("项目不存在: projectID=%d", chapter.ProjectID)
		return nil, fmt.Errorf("项目不存在")
	}

	ttsAPIKey := project.TTSApiKey
	ttsAppID := project.TTSAppID
	ttsToken := project.TTSToken

	// 检查必需参数
	if paragraph.Content == "" {
		utils.Warn("段落内容为空: paragraphID=%d", paragraphID)
		return nil, fmt.Errorf("段落内容为空")
	}

	voiceID := paragraph.VoiceID
	if voiceID == "" {
		// 尝试从角色配置获取音色
		voiceID, err = s.getDefaultVoiceID(project, paragraph.Speaker)
		if err != nil {
			utils.Warn("无法获取音色ID: paragraphID=%d, err=%v", paragraphID, err)
			return nil, fmt.Errorf("请先为段落配置音色")
		}
		paragraph.VoiceID = voiceID
	}

	utils.Info("TTS参数: voiceID=%s, tone=%s, speed=%.2f, textLength=%d",
		voiceID, paragraph.Tone, paragraph.Speed, len(paragraph.Content))

	// 创建TTS客户端
	ttsConfig := utils.TTSConfig{
		APIKey:   ttsAPIKey,
		Endpoint: s.ttsConfig.Endpoint,
		AppID:    ttsAppID,
		Token:    ttsToken,
	}
	ttsClient := utils.NewTTSClient(ttsConfig)

	// 生成音频
	result, err := ttsClient.SynthesizeAudio(paragraph.Content, voiceID, paragraph.Tone, paragraph.Speed)
	if err != nil {
		utils.Error("音频生成失败: paragraphID=%d, err=%v", paragraphID, err)
		return nil, fmt.Errorf("音频生成失败: %w", err)
	}

	// 将音频数据转换为base64保存到数据库
	audioBase64 := base64.StdEncoding.EncodeToString(result.AudioData)

	// 更新段落信息（不保存文件，只保存base64）
	paragraph.AudioPath = ""
	paragraph.AudioData = audioBase64
	if result.Duration > 0 {
		paragraph.Duration = result.Duration
	}

	if err := s.repo.UpdateParagraph(paragraph); err != nil {
		utils.Error("更新段落失败: paragraphID=%d, err=%v", paragraphID, err)
		return nil, fmt.Errorf("更新段落失败: %w", err)
	}

	utils.Info("段落音频生成成功: paragraphID=%d, audioSize=%d bytes",
		paragraphID, len(result.AudioData))

	return toModelsParagraph(paragraph), nil
}

// GenerateBatchAudio 批量生成段落音频
func (s *ChapterService) GenerateBatchAudio(paragraphIDs []int64) ([]*models.Paragraph, error) {
	utils.Info("开始批量生成音频: count=%d", len(paragraphIDs))

	results := make([]*models.Paragraph, 0, len(paragraphIDs))
	errors := make([]error, 0)

	for i, paragraphID := range paragraphIDs {
		utils.Info("批量生成进度: %d/%d, paragraphID=%d", i+1, len(paragraphIDs), paragraphID)

		result, err := s.GenerateParagraphAudio(paragraphID)
		if err != nil {
			utils.Error("生成段落音频失败: paragraphID=%d, err=%v", paragraphID, err)
			errors = append(errors, fmt.Errorf("段落%d: %w", paragraphID, err))
			continue
		}
		results = append(results, result)
	}

	utils.Info("批量生成完成: 成功=%d, 失败=%d", len(results), len(errors))

	if len(errors) > 0 && len(results) == 0 {
		return nil, fmt.Errorf("所有段落音频生成失败: %v", errors)
	}

	return results, nil
}

// GenerateChapterAudio 生成整个章节的音频
func (s *ChapterService) GenerateChapterAudio(chapterID int64) ([]*models.Paragraph, error) {
	utils.Info("开始生成章节音频: chapterID=%d", chapterID)

	paragraphs, err := s.repo.GetParagraphsByChapterID(chapterID)
	if err != nil {
		utils.Error("获取章节段落失败: chapterID=%d, err=%v", chapterID, err)
		return nil, fmt.Errorf("获取章节段落失败: %w", err)
	}

	if len(paragraphs) == 0 {
		utils.Warn("章节没有段落: chapterID=%d", chapterID)
		return nil, fmt.Errorf("章节没有段落")
	}

	paragraphIDs := make([]int64, len(paragraphs))
	for i, p := range paragraphs {
		paragraphIDs[i] = p.ID
	}

	return s.GenerateBatchAudio(paragraphIDs)
}

// getDefaultVoiceID 获取默认音色ID
func (s *ChapterService) getDefaultVoiceID(project *repositories.Project, speaker string) (string, error) {
	// 如果没有说话人，使用旁白音色
	if speaker == "" {
		if project.NarratorVoiceID != "" {
			return project.NarratorVoiceID, nil
		}
		return "", fmt.Errorf("未配置旁白音色")
	}

	// 从已知角色列表中查找
	knownChars, err := s.projectService.GetProjectKnownCharacters(project.ID)
	if err == nil {
		for _, c := range knownChars {
			if c.Name == speaker && c.VoiceID != "" {
				return c.VoiceID, nil
			}
		}
	}

	return "", fmt.Errorf("未找到角色音色")
}

// getAudioFilePath 获取音频文件保存路径
func (s *ChapterService) getAudioFilePath(projectID, chapterID, paragraphID int64) (string, error) {
	appDataDir, err := os.UserCacheDir()
	if err != nil {
		return "", err
	}

	audioDir := filepath.Join(appDataDir, "tmy2", "audio",
		fmt.Sprintf("project_%d", projectID),
		fmt.Sprintf("chapter_%d", chapterID))

	if err := os.MkdirAll(audioDir, 0755); err != nil {
		return "", err
	}

	return filepath.Join(audioDir, fmt.Sprintf("paragraph_%d.mp3", paragraphID)), nil
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
func (s *ChapterService) UpdateParagraph(id int64, content, speaker, tone, voiceID string, speed float64, audioPath string, audioData string, duration float64, orderIndex int) error {
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
	paragraph.AudioData = audioData
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
	utils.Info("开始拆分段落: chapterID=%d", chapterID)
	chapter, err := s.repo.GetByID(chapterID)
	if err != nil {
		utils.Error("获取章节失败: chapterID=%d, err=%v", chapterID, err)
		return nil, err
	}
	if chapter == nil {
		utils.Warn("章节不存在: chapterID=%d", chapterID)
		return nil, fmt.Errorf("chapter not found")
	}

	if chapter.Content == "" {
		utils.Warn("章节内容为空: chapterID=%d", chapterID)
		return nil, fmt.Errorf("章节内容为空")
	}

	// 获取项目配置的 API Key
	project, err := s.projectRepo.GetByID(chapter.ProjectID)
	if err != nil {
		utils.Error("获取项目信息失败: projectID=%d, err=%v", chapter.ProjectID, err)
		return nil, fmt.Errorf("获取项目信息失败: %w", err)
	}
	if project == nil {
		utils.Warn("项目不存在: projectID=%d", chapter.ProjectID)
		return nil, fmt.Errorf("项目不存在")
	}
	if project.LLMApiKey == "" {
		utils.Warn("项目未配置 API Key: projectID=%d", chapter.ProjectID)
		return nil, fmt.Errorf("项目未配置 API Key，请先在项目设置中配置")
	}

	// 获取已知角色列表
	knownCharacters, err := s.projectService.GetProjectKnownCharacters(chapter.ProjectID)
	if err != nil {
		utils.Warn("获取已知角色列表失败: projectID=%d, err=%v", chapter.ProjectID, err)
		knownCharacters = []models.CharacterInfo{}
	}
	utils.Debug("已知角色列表: projectID=%d, count=%d", chapter.ProjectID, len(knownCharacters))

	// 转换为 LLM 客户端需要的格式
	knownCharsForPrompt := make([]utils.CharacterInfoForPrompt, len(knownCharacters))
	for i, c := range knownCharacters {
		knownCharsForPrompt[i] = utils.CharacterInfoForPrompt{
			Name:        c.Name,
			Description: c.Description,
		}
	}

	// 使用项目 API Key 和固定的 model name 创建 LLM 客户端
	config := utils.LLMConfig{
		APIKey:    project.LLMApiKey,
		Endpoint:  "https://ark.cn-beijing.volces.com/api/v3",
		ModelName: "doubao-seed-2-0-lite-260215",
	}
	llmClient := utils.NewLLMClient(config)

	llmResult, err := llmClient.SplitParagraph(context.Background(), chapter.Content, knownCharsForPrompt)
	if err != nil {
		utils.Error("LLM 拆分失败: chapterID=%d, err=%v", chapterID, err)
		return nil, fmt.Errorf("LLM 拆分失败: %w", err)
	}

	utils.Info("LLM 拆分成功: chapterID=%d, 段落数=%d, 角色数=%d", chapterID, len(llmResult.Paragraphs), len(llmResult.Characters))

	// 更新角色信息
	if len(llmResult.Characters) > 0 {
		// 统计哪些角色在当前章节出现
		speakerSet := make(map[string]bool)
		for _, p := range llmResult.Paragraphs {
			if p.Speaker != "" {
				speakerSet[p.Speaker] = true
			}
		}

		newCharacters := make([]models.CharacterInfo, len(llmResult.Characters))
		now := time.Now().Unix()
		for i, c := range llmResult.Characters {
			// 如果角色在当前段落中有说话，则添加当前章节到出现章节列表
			chapterNames := []string{}
			if speakerSet[c.Name] {
				chapterNames = append(chapterNames, chapter.Title)
			}

			newCharacters[i] = models.CharacterInfo{
				Name:         c.Name,
				Description:  c.Description,
				Gender:       c.Gender,
				Age:          c.Age,
				Aliases:      c.Aliases,
				ChapterNames: chapterNames,
				LastSeenAt:   now,
			}
		}
		utils.Info("发现角色: projectID=%d, count=%d", chapter.ProjectID, len(newCharacters))
		// 更新已知角色列表
		if err := s.projectService.UpdateProjectKnownCharacters(chapter.ProjectID, newCharacters); err != nil {
			utils.Warn("更新已知角色列表失败: projectID=%d, err=%v", chapter.ProjectID, err)
		}
	}

	existingParagraphs, err := s.repo.GetParagraphsByChapterID(chapterID)
	if err == nil {
		for _, p := range existingParagraphs {
			_ = s.repo.DeleteParagraph(p.ID)
		}
	}

	result := make([]*models.Paragraph, 0, len(llmResult.Paragraphs))
	for i, llmP := range llmResult.Paragraphs {
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

	llmResult, err := s.llmClient.SplitParagraph(context.Background(), content, []utils.CharacterInfoForPrompt{})
	if err != nil {
		return nil, fmt.Errorf("LLM 拆分失败: %w", err)
	}

	result := make([]*models.Paragraph, 0, len(llmResult.Paragraphs))
	for i, llmP := range llmResult.Paragraphs {
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
		AudioData:  p.AudioData,
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
		AudioData:  p.AudioData,
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
