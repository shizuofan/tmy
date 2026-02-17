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
