package controllers

import (
	"tmy2/backend/models"
	"tmy2/backend/services"
)

// VoiceController 音色控制器
type VoiceController struct {
	service *services.VoiceService
}

// NewVoiceController 创建音色控制器
func NewVoiceController() *VoiceController {
	return &VoiceController{
		service: services.NewVoiceService(),
	}
}

// GetVoices 获取所有音色
func (c *VoiceController) GetVoices() ([]*models.Voice, error) {
	return c.service.GetVoices()
}

// GetVoice 获取音色详情
func (c *VoiceController) GetVoice(id string) (*models.Voice, error) {
	return c.service.GetVoice(id)
}
