package utils

import (
	"fmt"
	"os"
	"path/filepath"
	"sync"

	"gopkg.in/yaml.v3"
	"tmy2/backend/models"
)

// VoiceConfig 音色配置结构
type VoiceConfig struct {
	Voices     []VoiceItem     `yaml:"voices"`
	Categories []CategoryItem  `yaml:"categories"`
}

// VoiceItem 音色配置项
type VoiceItem struct {
	ID             string   `yaml:"id"`
	Name           string   `yaml:"name"`
	Description    string   `yaml:"description"`
	Language       string   `yaml:"language"`
	Gender         string   `yaml:"gender"`
	Category       string   `yaml:"category"`
	SupportedTones []string `yaml:"supported_tones"`
}

// CategoryItem 音色分类
type CategoryItem struct {
	Key         string `yaml:"key"`
	Name        string `yaml:"name"`
	Description string `yaml:"description"`
}

// VoiceManager 音色管理器
type VoiceManager struct {
	config *VoiceConfig
	voices map[string]*models.Voice
	mu     sync.RWMutex
}

var (
	voiceManager *VoiceManager
	voiceOnce    sync.Once
)

// GetVoiceManager 获取音色管理器单例
func GetVoiceManager() *VoiceManager {
	voiceOnce.Do(func() {
		voiceManager = &VoiceManager{
			voices: make(map[string]*models.Voice),
		}
	})
	return voiceManager
}

// LoadConfig 加载音色配置
func (vm *VoiceManager) LoadConfig() error {
	vm.mu.Lock()
	defer vm.mu.Unlock()

	configPath := vm.findConfigFile()
	if configPath == "" {
		return fmt.Errorf("无法找到音色配置文件")
	}

	data, err := os.ReadFile(configPath)
	if err != nil {
		return fmt.Errorf("读取音色配置失败: %w", err)
	}

	var config VoiceConfig
	if err := yaml.Unmarshal(data, &config); err != nil {
		return fmt.Errorf("解析音色配置失败: %w", err)
	}

	vm.config = &config

	// 转换为 models.Voice
	vm.voices = make(map[string]*models.Voice)
	for _, v := range config.Voices {
		voice := &models.Voice{
			ID:             v.ID,
			Name:           v.Name,
			Description:    v.Description,
			SupportedTones: v.SupportedTones,
			Language:       v.Language,
		}
		vm.voices[v.ID] = voice
	}

	return nil
}

// findConfigFile 查找配置文件
func (vm *VoiceManager) findConfigFile() string {
	// 可能的配置文件路径
	searchPaths := []string{
		"config/voices.yaml",
		"../config/voices.yaml",
		"../../config/voices.yaml",
	}

	// 获取可执行文件所在目录
	exePath, err := os.Executable()
	if err == nil {
		exeDir := filepath.Dir(exePath)
		searchPaths = append(searchPaths,
			filepath.Join(exeDir, "config/voices.yaml"),
		)
	}

	for _, path := range searchPaths {
		if _, err := os.Stat(path); err == nil {
			return path
		}
	}

	return ""
}

// GetVoices 获取所有音色
func (vm *VoiceManager) GetVoices() ([]*models.Voice, error) {
	vm.mu.RLock()
	defer vm.mu.RUnlock()

	if vm.config == nil {
		if err := vm.LoadConfig(); err != nil {
			return nil, err
		}
	}

	result := make([]*models.Voice, 0, len(vm.voices))
	for _, v := range vm.voices {
		result = append(result, v)
	}

	return result, nil
}

// GetVoiceByID 根据ID获取音色
func (vm *VoiceManager) GetVoiceByID(id string) (*models.Voice, error) {
	vm.mu.RLock()
	defer vm.mu.RUnlock()

	if vm.config == nil {
		if err := vm.LoadConfig(); err != nil {
			return nil, err
		}
	}

	voice, ok := vm.voices[id]
	if !ok {
		return nil, fmt.Errorf("未找到音色: %s", id)
	}

	return voice, nil
}

// GetVoicesByCategory 根据分类获取音色
func (vm *VoiceManager) GetVoicesByCategory(category string) ([]*models.Voice, error) {
	vm.mu.RLock()
	defer vm.mu.RUnlock()

	if vm.config == nil {
		if err := vm.LoadConfig(); err != nil {
			return nil, err
		}
	}

	var result []*models.Voice
	for _, v := range vm.config.Voices {
		if v.Category == category {
			voice := vm.voices[v.ID]
			result = append(result, voice)
		}
	}

	return result, nil
}

// GetVoicesByLanguage 根据语言获取音色
func (vm *VoiceManager) GetVoicesByLanguage(language string) ([]*models.Voice, error) {
	vm.mu.RLock()
	defer vm.mu.RUnlock()

	if vm.config == nil {
		if err := vm.LoadConfig(); err != nil {
			return nil, err
		}
	}

	var result []*models.Voice
	for _, v := range vm.config.Voices {
		if v.Language == language {
			voice := vm.voices[v.ID]
			result = append(result, voice)
		}
	}

	return result, nil
}

// GetCategories 获取音色分类列表
func (vm *VoiceManager) GetCategories() ([]CategoryItem, error) {
	vm.mu.RLock()
	defer vm.mu.RUnlock()

	if vm.config == nil {
		if err := vm.LoadConfig(); err != nil {
			return nil, err
		}
	}

	return vm.config.Categories, nil
}

// GetVoiceConfigItem 获取原始配置项（包含性别、分类等额外信息）
func (vm *VoiceManager) GetVoiceConfigItem(id string) (*VoiceItem, error) {
	vm.mu.RLock()
	defer vm.mu.RUnlock()

	if vm.config == nil {
		if err := vm.LoadConfig(); err != nil {
			return nil, err
		}
	}

	for _, v := range vm.config.Voices {
		if v.ID == id {
			return &v, nil
		}
	}

	return nil, fmt.Errorf("未找到音色配置: %s", id)
}

// GetAllVoiceConfigItems 获取所有音色配置项
func (vm *VoiceManager) GetAllVoiceConfigItems() ([]VoiceItem, error) {
	vm.mu.RLock()
	defer vm.mu.RUnlock()

	if vm.config == nil {
		if err := vm.LoadConfig(); err != nil {
			return nil, err
		}
	}

	return vm.config.Voices, nil
}
