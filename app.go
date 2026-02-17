package main

import (
	"context"
	"fmt"
	"log"

	"tmy2/backend/repositories"
	"tmy2/backend/utils"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
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

// 工程相关方法

// CreateProject 创建工程
func (a *App) CreateProject(name, description string) (int64, error) {
	repo := repositories.NewProjectRepository()
	project := &repositories.Project{
		Name:        name,
		Description: description,
	}
	if err := repo.Create(project); err != nil {
		return 0, err
	}
	return project.ID, nil
}

// GetProjects 获取工程列表
func (a *App) GetProjects() ([]*repositories.Project, error) {
	repo := repositories.NewProjectRepository()
	return repo.GetAll()
}

// GetProject 获取工程详情
func (a *App) GetProject(id int64) (*repositories.Project, error) {
	repo := repositories.NewProjectRepository()
	return repo.GetByID(id)
}

// UpdateProject 更新工程
func (a *App) UpdateProject(id int64, name, description string) error {
	repo := repositories.NewProjectRepository()
	project, err := repo.GetByID(id)
	if err != nil {
		return err
	}
	if project == nil {
		return fmt.Errorf("project not found")
	}

	project.Name = name
	project.Description = description
	return repo.Update(project)
}

// DeleteProject 删除工程
func (a *App) DeleteProject(id int64) error {
	repo := repositories.NewProjectRepository()
	return repo.Delete(id)
}

// 章节相关方法

// CreateChapter 创建章节
func (a *App) CreateChapter(projectID int64, title, content string) (int64, error) {
	repo := repositories.NewChapterRepository()

	// 获取当前章节最大的 order_index
	chapters, err := repo.GetByProjectID(projectID)
	if err != nil {
		return 0, err
	}

	orderIndex := len(chapters)

	chapter := &repositories.Chapter{
		ProjectID:  projectID,
		Title:      title,
		Content:    content,
		OrderIndex: orderIndex,
	}
	if err := repo.Create(chapter); err != nil {
		return 0, err
	}
	return chapter.ID, nil
}

// GetChapters 获取工程章节列表
func (a *App) GetChapters(projectID int64) ([]*repositories.Chapter, error) {
	repo := repositories.NewChapterRepository()
	return repo.GetByProjectID(projectID)
}

// GetChapter 获取章节详情
func (a *App) GetChapter(id int64) (*repositories.Chapter, error) {
	repo := repositories.NewChapterRepository()
	return repo.GetByID(id)
}

// UpdateChapter 更新章节
func (a *App) UpdateChapter(id int64, title, content string) error {
	repo := repositories.NewChapterRepository()
	chapter, err := repo.GetByID(id)
	if err != nil {
		return err
	}
	if chapter == nil {
		return fmt.Errorf("chapter not found")
	}

	chapter.Title = title
	chapter.Content = content
	return repo.Update(chapter)
}

// DeleteChapter 删除章节
func (a *App) DeleteChapter(id int64) error {
	repo := repositories.NewChapterRepository()
	return repo.Delete(id)
}

// ReorderChapters 调整章节顺序
func (a *App) ReorderChapters(projectID int64, chapterIDs []int64) error {
	repo := repositories.NewChapterRepository()
	return repo.ReorderChapters(projectID, chapterIDs)
}

// 角色相关方法

// CreateCharacter 创建角色
func (a *App) CreateCharacter(projectID int64, name, description, voiceID string) (int64, error) {
	repo := repositories.NewCharacterRepository()
	character := &repositories.Character{
		ProjectID:   projectID,
		Name:        name,
		Description: description,
		VoiceID:     voiceID,
	}
	if err := repo.Create(character); err != nil {
		return 0, err
	}
	return character.ID, nil
}

// GetCharacters 获取工程角色列表
func (a *App) GetCharacters(projectID int64) ([]*repositories.Character, error) {
	repo := repositories.NewCharacterRepository()
	return repo.GetByProjectID(projectID)
}

// GetCharacter 获取角色详情
func (a *App) GetCharacter(id int64) (*repositories.Character, error) {
	repo := repositories.NewCharacterRepository()
	return repo.GetByID(id)
}

// UpdateCharacter 更新角色
func (a *App) UpdateCharacter(id int64, name, description, voiceID string) error {
	repo := repositories.NewCharacterRepository()
	character, err := repo.GetByID(id)
	if err != nil {
		return err
	}
	if character == nil {
		return nil
	}

	character.Name = name
	character.Description = description
	character.VoiceID = voiceID
	return repo.Update(character)
}

// DeleteCharacter 删除角色
func (a *App) DeleteCharacter(id int64) error {
	repo := repositories.NewCharacterRepository()
	return repo.Delete(id)
}

// GetVoices 获取所有音色
func (a *App) GetVoices() ([]*repositories.Voice, error) {
	repo := repositories.NewCharacterRepository()
	return repo.GetAllVoices()
}

// GetVoice 获取音色详情
func (a *App) GetVoice(id string) (*repositories.Voice, error) {
	repo := repositories.NewCharacterRepository()
	return repo.GetVoiceByID(id)
}

