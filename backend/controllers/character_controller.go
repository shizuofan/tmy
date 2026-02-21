package controllers

import (
	"tmy2/backend/models"
	"tmy2/backend/services"
)

// CharacterController 角色控制器
type CharacterController struct {
	service *services.CharacterService
}

// NewCharacterController 创建角色控制器
func NewCharacterController() *CharacterController {
	return &CharacterController{
		service: services.NewCharacterService(),
	}
}

// CreateCharacter 创建角色
func (c *CharacterController) CreateCharacter(projectID int64, name, description, voiceID string) (int64, error) {
	return c.service.CreateCharacter(projectID, name, description, voiceID)
}

// GetCharacters 获取工程角色列表
func (c *CharacterController) GetCharacters(projectID int64) ([]*models.Character, error) {
	return c.service.GetCharacters(projectID)
}

// GetCharacter 获取角色详情
func (c *CharacterController) GetCharacter(id int64) (*models.Character, error) {
	return c.service.GetCharacter(id)
}

// UpdateCharacter 更新角色
func (c *CharacterController) UpdateCharacter(id int64, name, description, voiceID string) error {
	return c.service.UpdateCharacter(id, name, description, voiceID)
}

// DeleteCharacter 删除角色
func (c *CharacterController) DeleteCharacter(id int64) error {
	return c.service.DeleteCharacter(id)
}

// UpdateNarratorVoice 更新旁白音色
func (c *CharacterController) UpdateNarratorVoice(projectID int64, voiceID string) error {
	return c.service.UpdateNarratorVoice(projectID, voiceID)
}
