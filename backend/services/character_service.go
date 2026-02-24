package services

import (
	"encoding/json"
	"fmt"

	"tmy2/backend/models"
	"tmy2/backend/repositories"
	"tmy2/backend/utils"
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
func (s *CharacterService) CreateCharacter(projectID int64, name, description, voiceID, gender, age string, aliases []string) (int64, error) {
	character := &repositories.Character{
		ProjectID:   projectID,
		Name:        name,
		Description: description,
		VoiceID:     voiceID,
		Gender:      gender,
		Age:         age,
		Aliases:     aliases,
	}
	if err := s.repo.Create(character); err != nil {
		return 0, err
	}
	return character.ID, nil
}

// GetCharacters 获取工程角色列表
func (s *CharacterService) GetCharacters(projectID int64) ([]*models.Character, error) {
	// 从数据库获取角色
	cs, err := s.repo.GetByProjectID(projectID)
	if err != nil {
		return nil, err
	}

	// 获取工程信息
	project, err := s.projectRepo.GetByID(projectID)
	if err != nil {
		return nil, err
	}

	// 解析knownCharacters
	var knownCharacters []models.CharacterInfo
	if project != nil && project.KnownCharacters != "" {
		_ = json.Unmarshal([]byte(project.KnownCharacters), &knownCharacters)
	}

	// 添加旁白角色（虚拟角色，总是在列表第一位）
	result := []*models.Character{
		{
			ID:          0, // 0 表示旁白虚拟角色
			ProjectID:   projectID,
			Name:        "旁白",
			Description: "叙述性文本",
			VoiceID:     project.NarratorVoiceID,
		},
	}

	// 添加数据库中的角色
	result = append(result, toModelsCharacterList(cs)...)

	// 添加knownCharacters中的角色（避免重复）
	existingNames := make(map[string]bool)
	for _, c := range result {
		if c.Name != "" {
			existingNames[c.Name] = true
		}
	}

	for _, kc := range knownCharacters {
		if kc.Name == "" || existingNames[kc.Name] {
			continue
		}
		// 使用负数ID来区分knownCharacters中的角色
		result = append(result, &models.Character{
			ID:           int64(-len(result)), // 负数ID表示来自knownCharacters
			ProjectID:    projectID,
			Name:         kc.Name,
			Description:  kc.Description,
			VoiceID:      kc.VoiceID,
			Gender:       kc.Gender,
			Age:          kc.Age,
			Aliases:      kc.Aliases,
			ChapterNames: kc.ChapterNames,
			LastSeenAt:   kc.LastSeenAt,
		})
		utils.Debug("添加knownCharacter角色: name=%s, voiceID=%s", kc.Name, kc.VoiceID)
	}

	utils.Debug("获取角色列表: projectID=%d, 总数=%d (数据库=%d, known=%d)",
		projectID, len(result), len(cs), len(knownCharacters))

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
func (s *CharacterService) UpdateCharacter(id int64, name, description, voiceID, gender, age string, aliases []string) error {
	if id == 0 {
		return fmt.Errorf("cannot update narrator character")
	}

	// 如果是负数ID，表示是knownCharacters中的角色
	if id < 0 {
		return s.updateKnownCharacter(id, name, description, voiceID)
	}

	// 数据库中的角色
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
	character.Gender = gender
	character.Age = age
	character.Aliases = aliases
	return s.repo.Update(character)
}

// updateKnownCharacter 更新knownCharacters中的角色
func (s *CharacterService) updateKnownCharacter(id int64, name, description, voiceID string) error {
	// 先获取所有角色列表，找到对应的projectID
	// 我们需要通过其他方式获取projectID，这里简化处理：
	// 实际上我们需要从调用方获取projectID，或者通过其他方式

	// 由于我们没有projectID，这里使用一个临时方案：
	// 调用updateKnownCharacterVoice只更新音色，因为这是最常用的操作
	// 实际上更好的方案是修改API传入projectID

	// 暂时只支持更新音色，通过SetKnownCharacterVoice API
	// 这里为了兼容性，我们返回一个提示
	return fmt.Errorf("known characters should be updated via SetKnownCharacterVoice API")
}

// DeleteCharacter 删除角色
func (s *CharacterService) DeleteCharacter(id int64) error {
	if id == 0 {
		return fmt.Errorf("cannot delete narrator character")
	}

	// 如果是负数ID，表示是knownCharacters中的角色，不通过这里删除
	if id < 0 {
		return fmt.Errorf("known characters cannot be deleted via this API")
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
		ID:           c.ID,
		ProjectID:    c.ProjectID,
		Name:         c.Name,
		Description:  c.Description,
		VoiceID:      c.VoiceID,
		Gender:       c.Gender,
		Age:          c.Age,
		Aliases:      c.Aliases,
		ChapterNames: c.ChapterNames,
		LastSeenAt:   c.LastSeenAt,
		CreatedAt:    c.CreatedAt,
		UpdatedAt:    c.UpdatedAt,
	}
}

func toModelsCharacter(c *repositories.Character) *models.Character {
	if c == nil {
		return nil
	}
	return &models.Character{
		ID:           c.ID,
		ProjectID:    c.ProjectID,
		Name:         c.Name,
		Description:  c.Description,
		VoiceID:      c.VoiceID,
		Gender:       c.Gender,
		Age:          c.Age,
		Aliases:      c.Aliases,
		ChapterNames: c.ChapterNames,
		LastSeenAt:   c.LastSeenAt,
		CreatedAt:    c.CreatedAt,
		UpdatedAt:    c.UpdatedAt,
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
