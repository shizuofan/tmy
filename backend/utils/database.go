package utils

import (
	"database/sql"
	"log"
	"os"
	"path/filepath"

	_ "modernc.org/sqlite"
)

var DB *sql.DB

// InitDB 初始化数据库连接
func InitDB() error {
	// 获取应用数据目录
	appDataDir, err := os.UserCacheDir()
	if err != nil {
		return err
	}

	dbPath := filepath.Join(appDataDir, "tmy2", "database.db")

	// 确保目录存在
	if err := os.MkdirAll(filepath.Dir(dbPath), 0755); err != nil {
		return err
	}

	// 打开数据库连接
	DB, err = sql.Open("sqlite", dbPath)
	if err != nil {
		return err
	}

	// 创建表
	if err := createTables(); err != nil {
		return err
	}

	return nil
}

// createTables 创建数据库表
func createTables() error {
	// 创建 projects 表
	_, err := DB.Exec(`
		CREATE TABLE IF NOT EXISTS projects (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			description TEXT,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
		)
	`)
	if err != nil {
		return err
	}

	// 创建 chapters 表
	_, err = DB.Exec(`
		CREATE TABLE IF NOT EXISTS chapters (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			project_id INTEGER NOT NULL,
			title TEXT NOT NULL,
			content TEXT,
			order_index INTEGER DEFAULT 0,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
		)
	`)
	if err != nil {
		return err
	}

	// 创建 paragraphs 表
	_, err = DB.Exec(`
		CREATE TABLE IF NOT EXISTS paragraphs (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			chapter_id INTEGER NOT NULL,
			content TEXT NOT NULL,
			speaker TEXT,
			tone TEXT DEFAULT 'neutral',
			voice_id TEXT,
			speed REAL DEFAULT 1.0,
			audio_path TEXT,
			duration REAL,
			order_index INTEGER DEFAULT 0,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
		)
	`)
	if err != nil {
		return err
	}

	// 创建 characters 表
	_, err = DB.Exec(`
		CREATE TABLE IF NOT EXISTS characters (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			project_id INTEGER NOT NULL,
			name TEXT NOT NULL,
			description TEXT,
			voice_id TEXT,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
		)
	`)
	if err != nil {
		return err
	}

	// 创建 voices 表（预加载音色数据）
	_, err = DB.Exec(`
		CREATE TABLE IF NOT EXISTS voices (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			description TEXT,
			supported_tones TEXT,
			language TEXT DEFAULT 'zh'
		)
	`)
	if err != nil {
		return err
	}

	// 预加载默认音色数据
	if err := preloadDefaultVoices(); err != nil {
		log.Printf("Failed to preload default voices: %v", err)
	}

	return nil
}

// preloadDefaultVoices 预加载默认音色数据
func preloadDefaultVoices() error {
	// 检查是否已存在音色数据
	var count int
	err := DB.QueryRow("SELECT COUNT(*) FROM voices").Scan(&count)
	if err != nil {
		return err
	}

	if count > 0 {
		return nil // 已存在数据，跳过
	}

	// 插入默认音色
	voices := []struct {
		ID             string
		Name           string
		Description    string
		SupportedTones string
		Language       string
	}{
		{
			ID:             "BV001",
			Name:           "男声 - 标准",
			Description:    "标准男声，适合旁白和大部分角色",
			SupportedTones: `["neutral", "happy", "sad", "angry", "excited"]`,
			Language:       "zh",
		},
		{
			ID:             "BV002",
			Name:           "女声 - 标准",
			Description:    "标准女声，声音清晰明亮",
			SupportedTones: `["neutral", "happy", "sad", "angry", "excited"]`,
			Language:       "zh",
		},
		{
			ID:             "BV003",
			Name:           "男声 - 低沉",
			Description:    "低沉男声，适合反派角色",
			SupportedTones: `["neutral", "angry", "fearful", "surprised"]`,
			Language:       "zh",
		},
		{
			ID:             "BV004",
			Name:           "女声 - 甜美",
			Description:    "甜美女声，适合年轻女性角色",
			SupportedTones: `["neutral", "happy", "excited", "sad"]`,
			Language:       "zh",
		},
	}

	for _, v := range voices {
		_, err = DB.Exec(
			"INSERT OR IGNORE INTO voices (id, name, description, supported_tones, language) VALUES (?, ?, ?, ?, ?)",
			v.ID, v.Name, v.Description, v.SupportedTones, v.Language,
		)
		if err != nil {
			return err
		}
	}

	return nil
}

// CloseDB 关闭数据库连接
func CloseDB() error {
	if DB != nil {
		return DB.Close()
	}
	return nil
}
