package main

import (
	"context"
	"log"

	"tmy2/backend/controllers"
	"tmy2/backend/models"
	"tmy2/backend/utils"
)

// App struct
type App struct {
	ctx               context.Context
	projectController   *controllers.ProjectController
	chapterController   *controllers.ChapterController
	characterController *controllers.CharacterController
	voiceController     *controllers.VoiceController
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		projectController:   controllers.NewProjectController(),
		chapterController:   controllers.NewChapterController(),
		characterController: controllers.NewCharacterController(),
		voiceController:     controllers.NewVoiceController(),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx

	// 初始化数据库
	if err := utils.InitDB(); err != nil {
		log.Printf("Failed to initialize database: %v", err)
	}
}

// shutdown is called when the app exits
func (a *App) shutdown(ctx context.Context) {
	if err := utils.CloseDB(); err != nil {
		log.Printf("Failed to close database: %v", err)
	}
}

// ========== 工程相关方法 ==========

// CreateProject 创建工程
func (a *App) CreateProject(name, description string) (int64, error) {
	return a.projectController.CreateProject(name, description)
}

// GetProjects 获取工程列表
func (a *App) GetProjects() ([]*models.Project, error) {
	return a.projectController.GetProjects()
}

// GetProject 获取工程详情
func (a *App) GetProject(id int64) (*models.Project, error) {
	return a.projectController.GetProject(id)
}

// UpdateProject 更新工程
func (a *App) UpdateProject(id int64, name, description string) error {
	return a.projectController.UpdateProject(id, name, description)
}

// DeleteProject 删除工程
func (a *App) DeleteProject(id int64) error {
	return a.projectController.DeleteProject(id)
}

// ========== 章节相关方法 ==========

// CreateChapter 创建章节
func (a *App) CreateChapter(projectID int64, title, content string) (int64, error) {
	return a.chapterController.CreateChapter(projectID, title, content)
}

// GetChapters 获取工程章节列表
func (a *App) GetChapters(projectID int64) ([]*models.Chapter, error) {
	return a.chapterController.GetChapters(projectID)
}

// GetChapter 获取章节详情
func (a *App) GetChapter(id int64) (*models.Chapter, error) {
	return a.chapterController.GetChapter(id)
}

// UpdateChapter 更新章节
func (a *App) UpdateChapter(id int64, title, content string) error {
	return a.chapterController.UpdateChapter(id, title, content)
}

// DeleteChapter 删除章节
func (a *App) DeleteChapter(id int64) error {
	return a.chapterController.DeleteChapter(id)
}

// ReorderChapters 调整章节顺序
func (a *App) ReorderChapters(projectID int64, chapterIDs []int64) error {
	return a.chapterController.ReorderChapters(projectID, chapterIDs)
}

// ========== 段落相关方法 ==========

// CreateParagraph 创建段落
func (a *App) CreateParagraph(chapterID int64, content, speaker, tone, voiceID string, speed float64) (int64, error) {
	return a.chapterController.CreateParagraph(chapterID, content, speaker, tone, voiceID, speed)
}

// GetParagraphs 获取章节段落列表
func (a *App) GetParagraphs(chapterID int64) ([]*models.Paragraph, error) {
	return a.chapterController.GetParagraphs(chapterID)
}

// GetParagraph 获取段落详情
func (a *App) GetParagraph(id int64) (*models.Paragraph, error) {
	return a.chapterController.GetParagraph(id)
}

// UpdateParagraph 更新段落
func (a *App) UpdateParagraph(id int64, content, speaker, tone, voiceID string, speed float64, audioPath string, duration float64, orderIndex int) error {
	return a.chapterController.UpdateParagraph(id, content, speaker, tone, voiceID, speed, audioPath, duration, orderIndex)
}

// DeleteParagraph 删除段落
func (a *App) DeleteParagraph(id int64) error {
	return a.chapterController.DeleteParagraph(id)
}

// ========== LLM 相关方法 ==========

// SetLLMConfig 设置 LLM 配置
func (a *App) SetLLMConfig(apiKey, endpoint, modelName string) {
	a.chapterController.SetLLMConfig(apiKey, endpoint, modelName)
}

// GetLLMConfig 获取 LLM 配置
func (a *App) GetLLMConfig() utils.LLMConfig {
	return a.chapterController.GetLLMConfig()
}

// SplitParagraph 调用 LLM 拆分章节文本为段落
func (a *App) SplitParagraph(chapterID int64) ([]*models.Paragraph, error) {
	return a.chapterController.SplitParagraph(chapterID)
}

// SplitParagraphPreview 调用 LLM 拆分章节文本为段落（仅预览）
func (a *App) SplitParagraphPreview(content string) ([]*models.Paragraph, error) {
	return a.chapterController.SplitParagraphPreview(content)
}

// ========== 角色相关方法 ==========

// CreateCharacter 创建角色
func (a *App) CreateCharacter(projectID int64, name, description, voiceID string) (int64, error) {
	return a.characterController.CreateCharacter(projectID, name, description, voiceID)
}

// GetCharacters 获取工程角色列表
func (a *App) GetCharacters(projectID int64) ([]*models.Character, error) {
	return a.characterController.GetCharacters(projectID)
}

// GetCharacter 获取角色详情
func (a *App) GetCharacter(id int64) (*models.Character, error) {
	return a.characterController.GetCharacter(id)
}

// UpdateCharacter 更新角色
func (a *App) UpdateCharacter(id int64, name, description, voiceID string) error {
	return a.characterController.UpdateCharacter(id, name, description, voiceID)
}

// DeleteCharacter 删除角色
func (a *App) DeleteCharacter(id int64) error {
	return a.characterController.DeleteCharacter(id)
}

// ========== 音色相关方法 ==========

// GetVoices 获取所有音色
func (a *App) GetVoices() ([]*models.Voice, error) {
	return a.voiceController.GetVoices()
}

// GetVoice 获取音色详情
func (a *App) GetVoice(id string) (*models.Voice, error) {
	return a.voiceController.GetVoice(id)
}
