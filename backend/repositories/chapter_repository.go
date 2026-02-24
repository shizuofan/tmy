package repositories

import (
	"database/sql"
	"time"

	"tmy2/backend/utils"
)

// Chapter 章节模型
type Chapter struct {
	ID         int64     `json:"id"`
	ProjectID  int64     `json:"projectId"`
	Title      string    `json:"title"`
	Content    string    `json:"content"`
	OrderIndex int       `json:"orderIndex"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}

// Paragraph 段落模型
type Paragraph struct {
	ID         int64     `json:"id"`
	ChapterID  int64     `json:"chapterId"`
	Content    string    `json:"content"`
	Speaker    string    `json:"speaker"`
	Tone       string    `json:"tone"`
	VoiceID    string    `json:"voiceId"`
	Speed      float64   `json:"speed"`
	AudioPath  string    `json:"audioPath"`
	AudioData  string    `json:"audioData"`
	Duration   float64   `json:"duration"`
	OrderIndex int       `json:"orderIndex"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}

// ChapterRepository 章节数据访问接口
type ChapterRepository interface {
	Create(chapter *Chapter) error
	GetByID(id int64) (*Chapter, error)
	GetByProjectID(projectID int64) ([]*Chapter, error)
	Update(chapter *Chapter) error
	Delete(id int64) error
	ReorderChapters(projectID int64, chapterIDs []int64) error
	// 段落相关方法
	CreateParagraph(paragraph *Paragraph) error
	GetParagraphsByChapterID(chapterID int64) ([]*Paragraph, error)
	GetParagraphByID(id int64) (*Paragraph, error)
	UpdateParagraph(paragraph *Paragraph) error
	DeleteParagraph(id int64) error
}

// chapterRepository 章节数据访问实现
type chapterRepository struct {
}

// NewChapterRepository 创建章节数据访问实例
func NewChapterRepository() ChapterRepository {
	return &chapterRepository{}
}

// getDB 获取数据库连接
func (r *chapterRepository) getDB() *sql.DB {
	return utils.DB
}

// Create 创建章节
func (r *chapterRepository) Create(chapter *Chapter) error {
	now := time.Now()
	chapter.CreatedAt = now
	chapter.UpdatedAt = now

	result, err := r.getDB().Exec(
		"INSERT INTO chapters (project_id, title, content, order_index, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)",
		chapter.ProjectID, chapter.Title, chapter.Content, chapter.OrderIndex, chapter.CreatedAt, chapter.UpdatedAt,
	)
	if err != nil {
		return err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return err
	}
	chapter.ID = id

	return nil
}

// GetByID 根据 ID 获取章节
func (r *chapterRepository) GetByID(id int64) (*Chapter, error) {
	var chapter Chapter
	err := r.getDB().QueryRow(
		"SELECT id, project_id, title, content, order_index, created_at, updated_at FROM chapters WHERE id = ?",
		id,
	).Scan(&chapter.ID, &chapter.ProjectID, &chapter.Title, &chapter.Content, &chapter.OrderIndex, &chapter.CreatedAt, &chapter.UpdatedAt)

	if err == sql.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	return &chapter, nil
}

// GetByProjectID 根据项目 ID 获取章节列表
func (r *chapterRepository) GetByProjectID(projectID int64) ([]*Chapter, error) {
	rows, err := r.getDB().Query(
		"SELECT id, project_id, title, content, order_index, created_at, updated_at FROM chapters WHERE project_id = ? ORDER BY order_index ASC",
		projectID,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var chapters []*Chapter
	for rows.Next() {
		var chapter Chapter
		if err := rows.Scan(&chapter.ID, &chapter.ProjectID, &chapter.Title, &chapter.Content, &chapter.OrderIndex, &chapter.CreatedAt, &chapter.UpdatedAt); err != nil {
			return nil, err
		}
		chapters = append(chapters, &chapter)
	}

	return chapters, nil
}

// Update 更新章节
func (r *chapterRepository) Update(chapter *Chapter) error {
	chapter.UpdatedAt = time.Now()
	_, err := r.getDB().Exec(
		"UPDATE chapters SET title = ?, content = ?, order_index = ?, updated_at = ? WHERE id = ?",
		chapter.Title, chapter.Content, chapter.OrderIndex, chapter.UpdatedAt, chapter.ID,
	)
	return err
}

// Delete 删除章节
func (r *chapterRepository) Delete(id int64) error {
	_, err := r.getDB().Exec("DELETE FROM chapters WHERE id = ?", id)
	return err
}

// ReorderChapters 调整章节顺序
func (r *chapterRepository) ReorderChapters(projectID int64, chapterIDs []int64) error {
	tx, err := r.getDB().Begin()
	if err != nil {
		return err
	}

	for i, id := range chapterIDs {
		_, err := tx.Exec(
			"UPDATE chapters SET order_index = ? WHERE id = ? AND project_id = ?",
			i, id, projectID,
		)
		if err != nil {
			tx.Rollback()
			return err
		}
	}

	return tx.Commit()
}

// ========== 段落相关方法 ==========

// CreateParagraph 创建段落
func (r *chapterRepository) CreateParagraph(paragraph *Paragraph) error {
	now := time.Now()
	paragraph.CreatedAt = now
	paragraph.UpdatedAt = now

	result, err := r.getDB().Exec(
		`INSERT INTO paragraphs (chapter_id, content, speaker, tone, voice_id, speed, audio_path, audio_data, duration, order_index, created_at, updated_at)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
		paragraph.ChapterID, paragraph.Content, paragraph.Speaker, paragraph.Tone,
		paragraph.VoiceID, paragraph.Speed, paragraph.AudioPath, paragraph.AudioData,
		paragraph.Duration, paragraph.OrderIndex, paragraph.CreatedAt, paragraph.UpdatedAt,
	)
	if err != nil {
		return err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return err
	}
	paragraph.ID = id

	return nil
}

// GetParagraphsByChapterID 获取章节的所有段落
func (r *chapterRepository) GetParagraphsByChapterID(chapterID int64) ([]*Paragraph, error) {
	rows, err := r.getDB().Query(
		"SELECT id, chapter_id, content, speaker, tone, voice_id, speed, audio_path, audio_data, duration, order_index, created_at, updated_at FROM paragraphs WHERE chapter_id = ? ORDER BY order_index ASC",
		chapterID,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var paragraphs []*Paragraph
	for rows.Next() {
		var p Paragraph
		var audioData sql.NullString
		if err := rows.Scan(
			&p.ID, &p.ChapterID, &p.Content, &p.Speaker, &p.Tone, &p.VoiceID,
			&p.Speed, &p.AudioPath, &audioData, &p.Duration, &p.OrderIndex, &p.CreatedAt, &p.UpdatedAt,
		); err != nil {
			return nil, err
		}
		if audioData.Valid {
			p.AudioData = audioData.String
		}
		paragraphs = append(paragraphs, &p)
	}

	return paragraphs, nil
}

// GetParagraphByID 根据 ID 获取段落
func (r *chapterRepository) GetParagraphByID(id int64) (*Paragraph, error) {
	var p Paragraph
	var audioData sql.NullString
	err := r.getDB().QueryRow(
		"SELECT id, chapter_id, content, speaker, tone, voice_id, speed, audio_path, audio_data, duration, order_index, created_at, updated_at FROM paragraphs WHERE id = ?",
		id,
	).Scan(
		&p.ID, &p.ChapterID, &p.Content, &p.Speaker, &p.Tone, &p.VoiceID,
		&p.Speed, &p.AudioPath, &audioData, &p.Duration, &p.OrderIndex, &p.CreatedAt, &p.UpdatedAt,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	} else if err != nil {
		return nil, err
	}

	if audioData.Valid {
		p.AudioData = audioData.String
	}

	return &p, nil
}

// UpdateParagraph 更新段落
func (r *chapterRepository) UpdateParagraph(paragraph *Paragraph) error {
	paragraph.UpdatedAt = time.Now()
	_, err := r.getDB().Exec(
		`UPDATE paragraphs SET content = ?, speaker = ?, tone = ?, voice_id = ?, speed = ?,
		 audio_path = ?, audio_data = ?, duration = ?, order_index = ?, updated_at = ? WHERE id = ?`,
		paragraph.Content, paragraph.Speaker, paragraph.Tone, paragraph.VoiceID,
		paragraph.Speed, paragraph.AudioPath, paragraph.AudioData, paragraph.Duration, paragraph.OrderIndex,
		paragraph.UpdatedAt, paragraph.ID,
	)
	return err
}

// DeleteParagraph 删除段落
func (r *chapterRepository) DeleteParagraph(id int64) error {
	_, err := r.getDB().Exec("DELETE FROM paragraphs WHERE id = ?", id)
	return err
}
