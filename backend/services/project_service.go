package services

import (
	"tmy2/backend/models"
	"tmy2/backend/repositories"
	"tmy2/backend/utils"
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
	utils.Info("创建工程: name=%s", name)
	project := &repositories.Project{
		Name:        name,
		Description: description,
		LLMApiKey:   "",
	}
	if err := s.repo.Create(project); err != nil {
		utils.Error("创建工程失败: %v", err)
		return 0, err
	}
	utils.Info("工程创建成功: id=%d", project.ID)
	return project.ID, nil
}

// GetProjects 获取工程列表
func (s *ProjectService) GetProjects() ([]*models.Project, error) {
	utils.Debug("获取工程列表")
	ps, err := s.repo.GetAll()
	if err != nil {
		utils.Error("获取工程列表失败: %v", err)
		return nil, err
	}
	utils.Debug("获取到 %d 个工程", len(ps))
	return toModelsProjectList(ps), nil
}

// GetProject 获取工程详情
func (s *ProjectService) GetProject(id int64) (*models.Project, error) {
	utils.Debug("获取工程详情: id=%d", id)
	p, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("获取工程详情失败: id=%d, err=%v", id, err)
		return nil, err
	}
	return toModelsProject(p), nil
}

// UpdateProject 更新工程
func (s *ProjectService) UpdateProject(id int64, name, description string) error {
	utils.Info("更新工程: id=%d, name=%s", id, name)
	project, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("更新工程失败 - 查找工程: id=%d, err=%v", id, err)
		return err
	}
	if project == nil {
		utils.Warn("更新工程失败 - 工程不存在: id=%d", id)
		return nil
	}

	project.Name = name
	project.Description = description
	if err := s.repo.Update(project); err != nil {
		utils.Error("更新工程失败: id=%d, err=%v", id, err)
		return err
	}
	utils.Info("工程更新成功: id=%d", id)
	return nil
}

// SetProjectLLMApiKey 设置工程的 LLM API Key
func (s *ProjectService) SetProjectLLMApiKey(id int64, apiKey string) error {
	utils.Info("设置工程 API Key: id=%d", id)
	project, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("设置 API Key 失败 - 查找工程: id=%d, err=%v", id, err)
		return err
	}
	if project == nil {
		utils.Warn("设置 API Key 失败 - 工程不存在: id=%d", id)
		return nil
	}

	// 只记录 API Key 前4位和后4位用于调试
	maskedKey := maskApiKey(apiKey)
	utils.Debug("设置 API Key: id=%d, key=%s", id, maskedKey)

	project.LLMApiKey = apiKey
	if err := s.repo.Update(project); err != nil {
		utils.Error("设置 API Key 失败: id=%d, err=%v", id, err)
		return err
	}
	utils.Info("API Key 设置成功: id=%d", id)
	return nil
}

// maskApiKey 掩码显示 API Key
func maskApiKey(key string) string {
	if len(key) <= 8 {
		return "****"
	}
	return key[:4] + "..." + key[len(key)-4:]
}

// GetProjectLLMApiKey 获取工程的 LLM API Key
func (s *ProjectService) GetProjectLLMApiKey(id int64) (string, error) {
	utils.Debug("获取工程 API Key: id=%d", id)
	project, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("获取 API Key 失败: id=%d, err=%v", id, err)
		return "", err
	}
	if project == nil {
		return "", nil
	}

	return project.LLMApiKey, nil
}

// DeleteProject 删除工程
func (s *ProjectService) DeleteProject(id int64) error {
	utils.Warn("删除工程: id=%d", id)
	if err := s.repo.Delete(id); err != nil {
		utils.Error("删除工程失败: id=%d, err=%v", id, err)
		return err
	}
	utils.Info("工程删除成功: id=%d", id)
	return nil
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
		LLMApiKey:   p.LLMApiKey,
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
		LLMApiKey:   p.LLMApiKey,
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
