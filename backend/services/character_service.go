package services

import (
	"fmt"

	"tmy2/backend/models"
	"tmy2/backend/repositories"
)

// CharacterService 角色服务
type CharacterService struct {
	repo            repositories.CharacterRepository
	projectRepo     repositories.ProjectRepository
}

// NewCharacterService 创建角色服务
func NewCharacterService() *CharacterService {
	return &CharacterService{
		repo:        repositories.NewCharacterRepository(),
		projectRepo: repositories.NewProjectRepository(),
	}
}

// CreateCharacter 创建角色
func (s *CharacterService) CreateCharacter(projectID int64, name, description, voiceID string) (int64, error) {
	character := &repositories.Character{
		ProjectID:   projectID,
		Name:        name,
		Description: description,
		VoiceID:     voiceID,
	}
	if err := s.repo.Create(character); err != nil {
		return 0, err
	}
	return character.ID, nil
}

// GetCharacters 获取工程角色列表
func (s *CharacterService) GetCharacters(projectID int64) ([]*models.Character, error) {
	cs, err := s.repo.GetByProjectID(projectID)
	if err != nil {
		return nil, err
	}

	// 获取工程的旁白音色配置
	var narratorVoiceID string
	if project, err := s.projectRepo.GetByID(projectID); err == nil && project != nil {
		narratorVoiceID = project.NarratorVoiceID
	}

	// 添加旁白角色（虚拟角色，总是在列表第一位）
	result := []*models.Character{
		{
			ID:          0, // 0 表示旁白虚拟角色
			ProjectID:   projectID,
			Name:        "旁白",
			Description: "叙述性文本",
			VoiceID:     narratorVoiceID,
		},
	}
	result = append(result, toModelsCharacterList(cs)...)

	return result, nil
}

// GetCharacter 获取角色详情
func (s *CharacterService) GetCharacter(id int64) (*models.Character, error) {
	c, err := s.repo.GetByID(id)
	if err != nil {
		return nil, err
	}
	return toModelsCharacter(c), nil
}

// UpdateCharacter 更新角色
func (s *CharacterService) UpdateCharacter(id int64, name, description, voiceID string) error {
	if id == 0 {
		return fmt.Errorf("cannot update narrator character")
	}
	character, err := s.repo.GetByID(id)
	if err != nil {
		return err
	}
	if character == nil {
		return fmt.Errorf("character not found")
	}

	character.Name = name
	character.Description = description
	character.VoiceID = voiceID
	return s.repo.Update(character)
}

// DeleteCharacter 删除角色
func (s *CharacterService) DeleteCharacter(id int64) error {
	if id == 0 {
		return fmt.Errorf("cannot delete narrator character")
	}
	return s.repo.Delete(id)
}

// UpdateNarratorVoice 更新旁白角色的音色
func (s *CharacterService) UpdateNarratorVoice(projectID int64, voiceID string) error {
	project, err := s.projectRepo.GetByID(projectID)
	if err != nil {
		return err
	}
	if project == nil {
		return fmt.Errorf("project not found")
	}

	project.NarratorVoiceID = voiceID
	return s.projectRepo.Update(project)
}

// ========== 模型转换方法 ==========

func toRepoCharacter(c *models.Character) *repositories.Character {
	if c == nil {
		return nil
	}
	return &repositories.Character{
		ID:          c.ID,
		ProjectID:   c.ProjectID,
		Name:        c.Name,
		Description: c.Description,
		VoiceID:     c.VoiceID,
		CreatedAt:   c.CreatedAt,
		UpdatedAt:   c.UpdatedAt,
	}
}

func toModelsCharacter(c *repositories.Character) *models.Character {
	if c == nil {
		return nil
	}
	return &models.Character{
		ID:          c.ID,
		ProjectID:   c.ProjectID,
		Name:        c.Name,
		Description: c.Description,
		VoiceID:     c.VoiceID,
		CreatedAt:   c.CreatedAt,
		UpdatedAt:   c.UpdatedAt,
	}
}

func toModelsCharacterList(cs []*repositories.Character) []*models.Character {
	result := make([]*models.Character, len(cs))
	for i, c := range cs {
		result[i] = toModelsCharacter(c)
	}
	return result
}

func toRepoVoice(v *models.Voice) *repositories.Voice {
	if v == nil {
		return nil
	}
	return &repositories.Voice{
		ID:             v.ID,
		Name:           v.Name,
		Description:    v.Description,
		SupportedTones: v.SupportedTones,
		Language:       v.Language,
	}
}

func toModelsVoice(v *repositories.Voice) *models.Voice {
	if v == nil {
		return nil
	}
	return &models.Voice{
		ID:             v.ID,
		Name:           v.Name,
		Description:    v.Description,
		SupportedTones: v.SupportedTones,
		Language:       v.Language,
	}
}

func toModelsVoiceList(vs []*repositories.Voice) []*models.Voice {
	result := make([]*models.Voice, len(vs))
	for i, v := range vs {
		result[i] = toModelsVoice(v)
	}
	return result
}
