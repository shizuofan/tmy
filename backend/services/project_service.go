package services

import (
	"tmy2/backend/models"
	"tmy2/backend/repositories"
)

// ProjectService 工程服务
type ProjectService struct {
	repo repositories.ProjectRepository
}

// NewProjectService 创建工程服务
func NewProjectService() *ProjectService {
	return &ProjectService{
		repo: repositories.NewProjectRepository(),
	}
}

// CreateProject 创建工程
func (s *ProjectService) CreateProject(name, description string) (int64, error) {
	project := &repositories.Project{
		Name:        name,
		Description: description,
	}
	if err := s.repo.Create(project); err != nil {
		return 0, err
	}
	return project.ID, nil
}

// GetProjects 获取工程列表
func (s *ProjectService) GetProjects() ([]*models.Project, error) {
	ps, err := s.repo.GetAll()
	if err != nil {
		return nil, err
	}
	return toModelsProjectList(ps), nil
}

// GetProject 获取工程详情
func (s *ProjectService) GetProject(id int64) (*models.Project, error) {
	p, err := s.repo.GetByID(id)
	if err != nil {
		return nil, err
	}
	return toModelsProject(p), nil
}

// UpdateProject 更新工程
func (s *ProjectService) UpdateProject(id int64, name, description string) error {
	project, err := s.repo.GetByID(id)
	if err != nil {
		return err
	}
	if project == nil {
		return nil
	}

	project.Name = name
	project.Description = description
	return s.repo.Update(project)
}

// DeleteProject 删除工程
func (s *ProjectService) DeleteProject(id int64) error {
	return s.repo.Delete(id)
}

// ========== 模型转换方法 ==========

func toRepoProject(p *models.Project) *repositories.Project {
	if p == nil {
		return nil
	}
	return &repositories.Project{
		ID:          p.ID,
		Name:        p.Name,
		Description: p.Description,
		CreatedAt:   p.CreatedAt,
		UpdatedAt:   p.UpdatedAt,
	}
}

func toModelsProject(p *repositories.Project) *models.Project {
	if p == nil {
		return nil
	}
	return &models.Project{
		ID:          p.ID,
		Name:        p.Name,
		Description: p.Description,
		CreatedAt:   p.CreatedAt,
		UpdatedAt:   p.UpdatedAt,
	}
}

func toModelsProjectList(ps []*repositories.Project) []*models.Project {
	result := make([]*models.Project, len(ps))
	for i, p := range ps {
		result[i] = toModelsProject(p)
	}
	return result
}
