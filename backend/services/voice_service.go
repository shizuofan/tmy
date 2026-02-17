package services

import (
	"tmy2/backend/models"
	"tmy2/backend/repositories"
)

// VoiceService 音色服务
type VoiceService struct {
	repo repositories.CharacterRepository
}

// NewVoiceService 创建音色服务
func NewVoiceService() *VoiceService {
	return &VoiceService{
		repo: repositories.NewCharacterRepository(),
	}
}

// GetVoices 获取所有音色
func (s *VoiceService) GetVoices() ([]*models.Voice, error) {
	vs, err := s.repo.GetAllVoices()
	if err != nil {
		return nil, err
	}
	return toModelsVoiceList(vs), nil
}

// GetVoice 获取音色详情
func (s *VoiceService) GetVoice(id string) (*models.Voice, error) {
	v, err := s.repo.GetVoiceByID(id)
	if err != nil {
		return nil, err
	}
	return toModelsVoice(v), nil
}
