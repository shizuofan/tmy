package repositories

import (
	"database/sql"
	"time"

	"tmy2/backend/utils"
)

// Project 工程模型
type Project struct {
	ID               int64     `json:"id"`
	Name             string    `json:"name"`
	Description      string    `json:"description"`
	LLMApiKey        string    `json:"llmApiKey"`        // 文本大模型 API Key
	TTSApiKey        string    `json:"ttsApiKey"`        // 语音大模型 API Key
	TTSAppID         string    `json:"ttsAppId"`         // 语音大模型 App ID
	TTSToken         string    `json:"ttsToken"`         // 语音大模型 Token
	KnownCharacters  string    `json:"knownCharacters"`  // 已知角色列表(JSON格式存储
	NarratorVoiceID  string    `json:"narratorVoiceId"`  // 旁白音色ID
	CreatedAt        time.Time `json:"createdAt"`
	UpdatedAt        time.Time `json:"updatedAt"`
}

// ProjectRepository 工程数据访问接口
type ProjectRepository interface {
	Create(project *Project) error
	GetAll() ([]*Project, error)
	GetByID(id int64) (*Project, error)
	Update(project *Project) error
	Delete(id int64) error
}

// projectRepository 工程数据访问实现
type projectRepository struct {
}

// NewProjectRepository 创建工程数据访问实例
func NewProjectRepository() ProjectRepository {
	return &projectRepository{}
}

// getDB 获取数据库连接
func (r *projectRepository) getDB() *sql.DB {
	return utils.DB
}

// Create 创建工程
func (r *projectRepository) Create(project *Project) error {
	now := time.Now()
	project.CreatedAt = now
	project.UpdatedAt = now

	result, err := r.getDB().Exec(
		"INSERT INTO projects (name, description, llm_api_key, tts_api_key, tts_app_id, tts_token, known_characters, narrator_voice_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
		project.Name, project.Description, project.LLMApiKey, project.TTSApiKey, project.TTSAppID, project.TTSToken, project.KnownCharacters, project.NarratorVoiceID, project.CreatedAt, project.UpdatedAt,
	)
	if err != nil {
		return err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return err
	}
	project.ID = id

	return nil
}

// GetAll 获取所有工程
func (r *projectRepository) GetAll() ([]*Project, error) {
	rows, err := r.getDB().Query("SELECT id, name, description, llm_api_key, tts_api_key, tts_app_id, tts_token, known_characters, narrator_voice_id, created_at, updated_at FROM projects ORDER BY created_at DESC")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var projects []*Project
	for rows.Next() {
		var project Project
		var llmApiKey sql.NullString
		var ttsApiKey sql.NullString
		var ttsAppID sql.NullString
		var ttsToken sql.NullString
		var knownCharacters sql.NullString
		var narratorVoiceID sql.NullString
		if err := rows.Scan(&project.ID, &project.Name, &project.Description, &llmApiKey, &ttsApiKey, &ttsAppID, &ttsToken, &knownCharacters, &narratorVoiceID, &project.CreatedAt, &project.UpdatedAt); err != nil {
			return nil, err
		}
		project.LLMApiKey = llmApiKey.String
		project.TTSApiKey = ttsApiKey.String
		project.TTSAppID = ttsAppID.String
		project.TTSToken = ttsToken.String
		project.KnownCharacters = knownCharacters.String
		project.NarratorVoiceID = narratorVoiceID.String
		projects = append(projects, &project)
	}

	return projects, nil
}

// GetByID 根据 ID 获取工程
func (r *projectRepository) GetByID(id int64) (*Project, error) {
	var project Project
	var llmApiKey sql.NullString
	var ttsApiKey sql.NullString
	var ttsAppID sql.NullString
	var ttsToken sql.NullString
	var knownCharacters sql.NullString
	var narratorVoiceID sql.NullString
	err := r.getDB().QueryRow(
		"SELECT id, name, description, llm_api_key, tts_api_key, tts_app_id, tts_token, known_characters, narrator_voice_id, created_at, updated_at FROM projects WHERE id = ?",
		id,
	).Scan(&project.ID, &project.Name, &project.Description, &llmApiKey, &ttsApiKey, &ttsAppID, &ttsToken, &knownCharacters, &narratorVoiceID, &project.CreatedAt, &project.UpdatedAt)

	if err == sql.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	project.LLMApiKey = llmApiKey.String
	project.TTSApiKey = ttsApiKey.String
	project.TTSAppID = ttsAppID.String
	project.TTSToken = ttsToken.String
	project.KnownCharacters = knownCharacters.String
	project.NarratorVoiceID = narratorVoiceID.String
	return &project, nil
}

// Update 更新工程
func (r *projectRepository) Update(project *Project) error {
	project.UpdatedAt = time.Now()
	_, err := r.getDB().Exec(
		"UPDATE projects SET name = ?, description = ?, llm_api_key = ?, tts_api_key = ?, tts_app_id = ?, tts_token = ?, known_characters = ?, narrator_voice_id = ?, updated_at = ? WHERE id = ?",
		project.Name, project.Description, project.LLMApiKey, project.TTSApiKey, project.TTSAppID, project.TTSToken, project.KnownCharacters, project.NarratorVoiceID, project.UpdatedAt, project.ID,
	)
	return err
}

// Delete 删除工程
func (r *projectRepository) Delete(id int64) error {
	_, err := r.getDB().Exec("DELETE FROM projects WHERE id = ?", id)
	return err
}
