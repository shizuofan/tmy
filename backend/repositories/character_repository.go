package repositories

import (
	"database/sql"
	"encoding/json"
	"time"

	"tmy2/backend/utils"
)

// Character 角色模型
type Character struct {
	ID          int64     `json:"id"`
	ProjectID   int64     `json:"projectId"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	VoiceID     string    `json:"voiceId"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
}

// Voice 音色模型
type Voice struct {
	ID             string   `json:"id"`
	Name           string   `json:"name"`
	Description    string   `json:"description"`
	SupportedTones []string `json:"supportedTones"`
	Language       string   `json:"language"`
}

// CharacterRepository 角色数据访问接口
type CharacterRepository interface {
	Create(character *Character) error
	GetByProjectID(projectID int64) ([]*Character, error)
	GetByID(id int64) (*Character, error)
	Update(character *Character) error
	Delete(id int64) error
	GetAllVoices() ([]*Voice, error)
	GetVoiceByID(id string) (*Voice, error)
}

// characterRepository 角色数据访问实现
type characterRepository struct {
}

// NewCharacterRepository 创建角色数据访问实例
func NewCharacterRepository() CharacterRepository {
	return &characterRepository{}
}

// getDB 获取数据库连接
func (r *characterRepository) getDB() *sql.DB {
	return utils.DB
}

// Create 创建角色
func (r *characterRepository) Create(character *Character) error {
	now := time.Now()
	character.CreatedAt = now
	character.UpdatedAt = now

	result, err := r.getDB().Exec(
		"INSERT INTO characters (project_id, name, description, voice_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)",
		character.ProjectID, character.Name, character.Description, character.VoiceID, character.CreatedAt, character.UpdatedAt,
	)
	if err != nil {
		return err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return err
	}
	character.ID = id

	return nil
}

// GetByProjectID 获取工程的所有角色
func (r *characterRepository) GetByProjectID(projectID int64) ([]*Character, error) {
	rows, err := r.getDB().Query(
		"SELECT id, project_id, name, description, voice_id, created_at, updated_at FROM characters WHERE project_id = ? ORDER BY created_at ASC",
		projectID,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var characters []*Character
	for rows.Next() {
		var character Character
		if err := rows.Scan(
			&character.ID, &character.ProjectID, &character.Name,
			&character.Description, &character.VoiceID, &character.CreatedAt, &character.UpdatedAt,
		); err != nil {
			return nil, err
		}
		characters = append(characters, &character)
	}

	return characters, nil
}

// GetByID 根据 ID 获取角色
func (r *characterRepository) GetByID(id int64) (*Character, error) {
	var character Character
	err := r.getDB().QueryRow(
		"SELECT id, project_id, name, description, voice_id, created_at, updated_at FROM characters WHERE id = ?",
		id,
	).Scan(
		&character.ID, &character.ProjectID, &character.Name,
		&character.Description, &character.VoiceID, &character.CreatedAt, &character.UpdatedAt,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	return &character, nil
}

// Update 更新角色
func (r *characterRepository) Update(character *Character) error {
	character.UpdatedAt = time.Now()
	_, err := r.getDB().Exec(
		"UPDATE characters SET name = ?, description = ?, voice_id = ?, updated_at = ? WHERE id = ?",
		character.Name, character.Description, character.VoiceID, character.UpdatedAt, character.ID,
	)
	return err
}

// Delete 删除角色
func (r *characterRepository) Delete(id int64) error {
	_, err := r.getDB().Exec("DELETE FROM characters WHERE id = ?", id)
	return err
}

// GetAllVoices 获取所有音色
func (r *characterRepository) GetAllVoices() ([]*Voice, error) {
	rows, err := r.getDB().Query("SELECT id, name, description, supported_tones, language FROM voices ORDER BY id")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var voices []*Voice
	for rows.Next() {
		var voice Voice
		var supportedTonesStr string
		if err := rows.Scan(
			&voice.ID, &voice.Name, &voice.Description, &supportedTonesStr, &voice.Language,
		); err != nil {
			return nil, err
		}
		// 解析 JSON 格式的 supported_tones
		if supportedTonesStr != "" {
			if err := json.Unmarshal([]byte(supportedTonesStr), &voice.SupportedTones); err != nil {
				voice.SupportedTones = []string{}
			}
		} else {
			voice.SupportedTones = []string{}
		}
		voices = append(voices, &voice)
	}

	return voices, nil
}

// GetVoiceByID 根据 ID 获取音色
func (r *characterRepository) GetVoiceByID(id string) (*Voice, error) {
	var voice Voice
	var supportedTonesStr string
	err := r.getDB().QueryRow(
		"SELECT id, name, description, supported_tones, language FROM voices WHERE id = ?",
		id,
	).Scan(
		&voice.ID, &voice.Name, &voice.Description, &supportedTonesStr, &voice.Language,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	// 解析 JSON 格式的 supported_tones
	if supportedTonesStr != "" {
		if err := json.Unmarshal([]byte(supportedTonesStr), &voice.SupportedTones); err != nil {
			voice.SupportedTones = []string{}
		}
	} else {
		voice.SupportedTones = []string{}
	}

	return &voice, nil
}
