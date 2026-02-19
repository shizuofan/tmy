package controllers

import (
	"tmy2/backend/models"
	"tmy2/backend/services"
)

// ProjectController 工程控制器
type ProjectController struct {
	service *services.ProjectService
}

// NewProjectController 创建工程控制器
func NewProjectController() *ProjectController {
	return &ProjectController{
		service: services.NewProjectService(),
	}
}

// CreateProject 创建工程
func (c *ProjectController) CreateProject(name, description string) (int64, error) {
	return c.service.CreateProject(name, description)
}

// GetProjects 获取工程列表
func (c *ProjectController) GetProjects() ([]*models.Project, error) {
	return c.service.GetProjects()
}

// GetProject 获取工程详情
func (c *ProjectController) GetProject(id int64) (*models.Project, error) {
	return c.service.GetProject(id)
}

// UpdateProject 更新工程
func (c *ProjectController) UpdateProject(id int64, name, description string) error {
	return c.service.UpdateProject(id, name, description)
}

// DeleteProject 删除工程
func (c *ProjectController) DeleteProject(id int64) error {
	return c.service.DeleteProject(id)
}

// SetProjectLLMApiKey 设置工程的 LLM API Key
func (c *ProjectController) SetProjectLLMApiKey(id int64, apiKey string) error {
	return c.service.SetProjectLLMApiKey(id, apiKey)
}

// GetProjectLLMApiKey 获取工程的 LLM API Key
func (c *ProjectController) GetProjectLLMApiKey(id int64) (string, error) {
	return c.service.GetProjectLLMApiKey(id)
}

// UpdateProjectKnownCharacters 更新工程的已知角色列表
func (c *ProjectController) UpdateProjectKnownCharacters(projectID int64, characters []models.CharacterInfo) error {
	return c.service.UpdateProjectKnownCharacters(projectID, characters)
}

// GetProjectKnownCharacters 获取工程的已知角色列表
func (c *ProjectController) GetProjectKnownCharacters(projectID int64) ([]models.CharacterInfo, error) {
	return c.service.GetProjectKnownCharacters(projectID)
}

// DeleteProjectKnownCharacter 删除工程的指定已知角色
func (c *ProjectController) DeleteProjectKnownCharacter(projectID int64, characterName string) error {
	return c.service.DeleteProjectKnownCharacter(projectID, characterName)
}

// SetKnownCharacterVoice 设置已知角色的音色
func (c *ProjectController) SetKnownCharacterVoice(projectID int64, characterName string, voiceID string) error {
	return c.service.SetKnownCharacterVoice(projectID, characterName, voiceID)
}
