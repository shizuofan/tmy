package services

import (
	"tmy2/backend/models"
	"tmy2/backend/utils"
)

// VoiceService 音色服务
type VoiceService struct {
	voiceManager *utils.VoiceManager
}

// NewVoiceService 创建音色服务
func NewVoiceService() *VoiceService {
	return &VoiceService{
		voiceManager: utils.GetVoiceManager(),
	}
}

// GetVoices 获取所有音色
func (s *VoiceService) GetVoices() ([]*models.Voice, error) {
	return s.voiceManager.GetVoices()
}

// GetVoice 获取音色详情
func (s *VoiceService) GetVoice(id string) (*models.Voice, error) {
	return s.voiceManager.GetVoiceByID(id)
}
