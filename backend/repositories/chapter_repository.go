package repositories

import (
	"database/sql"
	"time"

	"tmy2/backend/utils"
)

// Chapter 章节模型（导出）
type Chapter struct {
	ID         int64     `json:"id"`
	ProjectID  int64     `json:"projectId"`
	Title      string    `json:"title"`
	Content    string    `json:"content"`
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
}

// chapterRepository 章节数据访问实现
type chapterRepository struct {
	db *sql.DB
}

// NewChapterRepository 创建章节数据访问实例
func NewChapterRepository() ChapterRepository {
	return &chapterRepository{
		db: utils.DB,
	}
}

// Create 创建章节
func (r *chapterRepository) Create(chapter *Chapter) error {
	now := time.Now()
	chapter.CreatedAt = now
	chapter.UpdatedAt = now

	result, err := r.db.Exec(
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
	err := r.db.QueryRow(
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
	rows, err := r.db.Query(
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
	_, err := r.db.Exec(
		"UPDATE chapters SET title = ?, content = ?, order_index = ?, updated_at = ? WHERE id = ?",
		chapter.Title, chapter.Content, chapter.OrderIndex, chapter.UpdatedAt, chapter.ID,
	)
	return err
}

// Delete 删除章节
func (r *chapterRepository) Delete(id int64) error {
	_, err := r.db.Exec("DELETE FROM chapters WHERE id = ?", id)
	return err
}

// ReorderChapters 调整章节顺序
func (r *chapterRepository) ReorderChapters(projectID int64, chapterIDs []int64) error {
	tx, err := r.db.Begin()
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
