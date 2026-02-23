package services

import (
	"encoding/json"
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
	utils.Info("设置工程 LLM API Key: id=%d", id)
	project, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("设置 LLM API Key 失败 - 查找工程: id=%d, err=%v", id, err)
		return err
	}
	if project == nil {
		utils.Warn("设置 LLM API Key 失败 - 工程不存在: id=%d", id)
		return nil
	}

	// 只记录 API Key 前4位和后4位用于调试
	maskedKey := maskApiKey(apiKey)
	utils.Debug("设置 LLM API Key: id=%d, key=%s", id, maskedKey)

	project.LLMApiKey = apiKey
	if err := s.repo.Update(project); err != nil {
		utils.Error("设置 LLM API Key 失败: id=%d, err=%v", id, err)
		return err
	}
	utils.Info("LLM API Key 设置成功: id=%d", id)
	return nil
}

// SetProjectTTSApiKey 设置工程的 TTS API Key
func (s *ProjectService) SetProjectTTSApiKey(id int64, apiKey string) error {
	utils.Info("设置工程 TTS API Key: id=%d", id)
	project, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("设置 TTS API Key 失败 - 查找工程: id=%d, err=%v", id, err)
		return err
	}
	if project == nil {
		utils.Warn("设置 TTS API Key 失败 - 工程不存在: id=%d", id)
		return nil
	}

	// 只记录 API Key 前4位和后4位用于调试
	maskedKey := maskApiKey(apiKey)
	utils.Debug("设置 TTS API Key: id=%d, key=%s", id, maskedKey)

	project.TTSApiKey = apiKey
	if err := s.repo.Update(project); err != nil {
		utils.Error("设置 TTS API Key 失败: id=%d, err=%v", id, err)
		return err
	}
	utils.Info("TTS API Key 设置成功: id=%d", id)
	return nil
}

// GetProjectTTSApiKey 获取工程的 TTS API Key
func (s *ProjectService) GetProjectTTSApiKey(id int64) (string, error) {
	utils.Debug("获取工程 TTS API Key: id=%d", id)
	project, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("获取 TTS API Key 失败: id=%d, err=%v", id, err)
		return "", err
	}
	if project == nil {
		return "", nil
	}

	return project.TTSApiKey, nil
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
	knownCharacters := ""
	if p.KnownCharacters != nil && len(p.KnownCharacters) > 0 {
		if data, err := json.Marshal(p.KnownCharacters); err == nil {
			knownCharacters = string(data)
		}
	}
	return &repositories.Project{
		ID:               p.ID,
		Name:             p.Name,
		Description:      p.Description,
		LLMApiKey:        p.LLMApiKey,
		TTSApiKey:        p.TTSApiKey,
		KnownCharacters:  knownCharacters,
		NarratorVoiceID:  p.NarratorVoiceID,
		CreatedAt:        p.CreatedAt,
		UpdatedAt:        p.UpdatedAt,
	}
}

func toModelsProject(p *repositories.Project) *models.Project {
	if p == nil {
		return nil
	}
	var knownCharacters []models.CharacterInfo
	if p.KnownCharacters != "" {
		_ = json.Unmarshal([]byte(p.KnownCharacters), &knownCharacters)
	}
	return &models.Project{
		ID:               p.ID,
		Name:             p.Name,
		Description:      p.Description,
		LLMApiKey:        p.LLMApiKey,
		TTSApiKey:        p.TTSApiKey,
		KnownCharacters:  knownCharacters,
		NarratorVoiceID:  p.NarratorVoiceID,
		CreatedAt:        p.CreatedAt,
		UpdatedAt:        p.UpdatedAt,
	}
}

// UpdateProjectKnownCharacters 更新工程的已知角色列表
func (s *ProjectService) UpdateProjectKnownCharacters(projectID int64, characters []models.CharacterInfo) error {
	utils.Info("更新工程已知角色: projectID=%d, count=%d", projectID, len(characters))
	project, err := s.repo.GetByID(projectID)
	if err != nil {
		utils.Error("更新已知角色失败 - 查找工程: projectID=%d, err=%v", projectID, err)
		return err
	}
	if project == nil {
		utils.Warn("更新已知角色失败 - 工程不存在: projectID=%d", projectID)
		return nil
	}

	// 合并现有角色和新角色，去重
	var existingCharacters []models.CharacterInfo
	if project.KnownCharacters != "" {
		_ = json.Unmarshal([]byte(project.KnownCharacters), &existingCharacters)
	}

	// 合并并去重
	charMap := make(map[string]models.CharacterInfo)
	for _, c := range existingCharacters {
		if c.Name != "" {
			charMap[c.Name] = c
		}
	}
	for _, c := range characters {
		if c.Name != "" {
			if existing, ok := charMap[c.Name]; ok {
				// 如果已有简介，保留；如果新简介不为空则更新
				if c.Description != "" {
					existing.Description = c.Description
				}
				// 更新性别
				if c.Gender != "" {
					existing.Gender = c.Gender
				}
				// 更新年龄
				if c.Age != "" {
					existing.Age = c.Age
				}
				// 更新音色
				if c.VoiceID != "" {
					existing.VoiceID = c.VoiceID
				}
				// 合并别名（去重）
				if len(c.Aliases) > 0 {
					aliasMap := make(map[string]bool)
					for _, a := range existing.Aliases {
						aliasMap[a] = true
					}
					for _, a := range c.Aliases {
						if !aliasMap[a] {
							existing.Aliases = append(existing.Aliases, a)
						}
					}
				}
				// 合并出现章节名称（去重）
				if len(c.ChapterNames) > 0 {
					chapterMap := make(map[string]bool)
					for _, ch := range existing.ChapterNames {
						chapterMap[ch] = true
					}
					for _, ch := range c.ChapterNames {
						if !chapterMap[ch] {
							existing.ChapterNames = append(existing.ChapterNames, ch)
						}
					}
				}
				// 更新最后出现时间（取最新的）
				if c.LastSeenAt > existing.LastSeenAt {
					existing.LastSeenAt = c.LastSeenAt
				}
				charMap[c.Name] = existing
			} else {
				charMap[c.Name] = c
			}
		}
	}

	// 转换回数组
	mergedCharacters := make([]models.CharacterInfo, 0, len(charMap))
	for _, c := range charMap {
		mergedCharacters = append(mergedCharacters, c)
	}

	// 序列化并保存
	if data, err := json.Marshal(mergedCharacters); err == nil {
		project.KnownCharacters = string(data)
		if err := s.repo.Update(project); err != nil {
			utils.Error("更新已知角色失败: projectID=%d, err=%v", projectID, err)
			return err
		}
		utils.Info("已知角色更新成功: projectID=%d, count=%d", projectID, len(mergedCharacters))
	}

	return nil
}

// GetProjectKnownCharacters 获取工程的已知角色列表
func (s *ProjectService) GetProjectKnownCharacters(projectID int64) ([]models.CharacterInfo, error) {
	utils.Debug("获取工程已知角色: projectID=%d", projectID)
	project, err := s.repo.GetByID(projectID)
	if err != nil {
		utils.Error("获取已知角色失败: projectID=%d, err=%v", projectID, err)
		return nil, err
	}
	if project == nil {
		return nil, nil
	}

	var knownCharacters []models.CharacterInfo
	if project.KnownCharacters != "" {
		_ = json.Unmarshal([]byte(project.KnownCharacters), &knownCharacters)
	}
	return knownCharacters, nil
}

// DeleteProjectKnownCharacter 删除工程的指定已知角色
func (s *ProjectService) DeleteProjectKnownCharacter(projectID int64, characterName string) error {
	utils.Info("删除工程已知角色: projectID=%d, characterName=%s", projectID, characterName)
	project, err := s.repo.GetByID(projectID)
	if err != nil {
		utils.Error("删除已知角色失败 - 查找工程: projectID=%d, err=%v", projectID, err)
		return err
	}
	if project == nil {
		utils.Warn("删除已知角色失败 - 工程不存在: projectID=%d", projectID)
		return nil
	}

	// 解析现有角色
	var knownCharacters []models.CharacterInfo
	if project.KnownCharacters != "" {
		_ = json.Unmarshal([]byte(project.KnownCharacters), &knownCharacters)
	}

	// 过滤掉要删除的角色
	filteredCharacters := make([]models.CharacterInfo, 0, len(knownCharacters))
	for _, c := range knownCharacters {
		if c.Name != characterName {
			filteredCharacters = append(filteredCharacters, c)
		}
	}

	// 序列化并保存
	if data, err := json.Marshal(filteredCharacters); err == nil {
		project.KnownCharacters = string(data)
		if err := s.repo.Update(project); err != nil {
			utils.Error("删除已知角色失败: projectID=%d, err=%v", projectID, err)
			return err
		}
		utils.Info("已知角色删除成功: projectID=%d, characterName=%s", projectID, characterName)
	}

	return nil
}

// SetKnownCharacterVoice 设置已知角色的音色
func (s *ProjectService) SetKnownCharacterVoice(projectID int64, characterName string, voiceID string) error {
	utils.Info("设置已知角色音色: projectID=%d, characterName=%s, voiceID=%s", projectID, characterName, voiceID)
	project, err := s.repo.GetByID(projectID)
	if err != nil {
		utils.Error("设置角色音色失败 - 查找工程: projectID=%d, err=%v", projectID, err)
		return err
	}
	if project == nil {
		utils.Warn("设置角色音色失败 - 工程不存在: projectID=%d", projectID)
		return nil
	}

	// 解析现有角色
	var knownCharacters []models.CharacterInfo
	if project.KnownCharacters != "" {
		_ = json.Unmarshal([]byte(project.KnownCharacters), &knownCharacters)
	}

	// 更新指定角色的音色
	found := false
	for i, c := range knownCharacters {
		if c.Name == characterName {
			knownCharacters[i].VoiceID = voiceID
			found = true
			break
		}
	}

	if !found {
		utils.Warn("设置角色音色失败 - 角色不存在: projectID=%d, characterName=%s", projectID, characterName)
		return nil
	}

	// 序列化并保存
	if data, err := json.Marshal(knownCharacters); err == nil {
		project.KnownCharacters = string(data)
		if err := s.repo.Update(project); err != nil {
			utils.Error("设置角色音色失败: projectID=%d, err=%v", projectID, err)
			return err
		}
		utils.Info("角色音色设置成功: projectID=%d, characterName=%s, voiceID=%s", projectID, characterName, voiceID)
	}

	return nil
}

// SetProjectNarratorVoiceID 设置工程的旁白音色ID
func (s *ProjectService) SetProjectNarratorVoiceID(id int64, voiceID string) error {
	utils.Info("设置工程旁白音色: id=%d, voiceID=%s", id, voiceID)
	project, err := s.repo.GetByID(id)
	if err != nil {
		utils.Error("设置旁白音色失败 - 查找工程: id=%d, err=%v", id, err)
		return err
	}
	if project == nil {
		utils.Warn("设置旁白音色失败 - 工程不存在: id=%d", id)
		return nil
	}

	project.NarratorVoiceID = voiceID
	if err := s.repo.Update(project); err != nil {
		utils.Error("设置旁白音色失败: id=%d, err=%v", id, err)
		return err
	}
	utils.Info("旁白音色设置成功: id=%d, voiceID=%s", id, voiceID)
	return nil
}

// UpdateKnownCharacter 更新已知角色的完整信息（性别、年龄、别名、简介）
func (s *ProjectService) UpdateKnownCharacter(projectID int64, characterName string, description string, gender string, age string, aliases []string) error {
	utils.Info("更新已知角色信息: projectID=%d, name=%s", projectID, characterName)
	project, err := s.repo.GetByID(projectID)
	if err != nil {
		utils.Error("更新已知角色失败 - 查找工程: projectID=%d, err=%v", projectID, err)
		return err
	}
	if project == nil {
		utils.Warn("更新已知角色失败 - 工程不存在: projectID=%d", projectID)
		return nil
	}

	// 解析现有角色
	var knownCharacters []models.CharacterInfo
	if project.KnownCharacters != "" {
		_ = json.Unmarshal([]byte(project.KnownCharacters), &knownCharacters)
	}

	// 查找并更新角色
	found := false
	for i, c := range knownCharacters {
		if c.Name == characterName {
			if description != "" {
				knownCharacters[i].Description = description
			}
			if gender != "" {
				knownCharacters[i].Gender = gender
			}
			if age != "" {
				knownCharacters[i].Age = age
			}
			knownCharacters[i].Aliases = aliases
			found = true
			break
		}
	}

	if !found {
		utils.Warn("更新已知角色失败 - 角色不存在: projectID=%d, name=%s", projectID, characterName)
		return nil
	}

	// 序列化并保存
	if data, err := json.Marshal(knownCharacters); err == nil {
		project.KnownCharacters = string(data)
		if err := s.repo.Update(project); err != nil {
			utils.Error("更新已知角色失败: projectID=%d, err=%v", projectID, err)
			return err
		}
		utils.Info("已知角色更新成功: projectID=%d, name=%s", projectID, characterName)
	}

	return nil
}

func toModelsProjectList(ps []*repositories.Project) []*models.Project {
	result := make([]*models.Project, len(ps))
	for i, p := range ps {
		result[i] = toModelsProject(p)
	}
	return result
}
