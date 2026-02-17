# 听墨语 - 项目规范文档

## 项目概述

**项目名称**: 听墨语
**项目代号**: tmy2
**项目类型**: 桌面应用程序
**主要功能**: 有声小说制作工具

## 技术栈

| 层级 | 技术选型 | 版本 |
|------|---------|------|
| 后端框架 | Wails | v2.11.0 |
| 前端框架 | React + TypeScript | - |
| 前端构建 | Vite | - |
| 后端语言 | Go | 1.23 |
| 数据库 | SQLite3 | - |
| ORM | 原生 SQL | - |

## 目录结构

```
tmy2/
├── main.go                 # 应用入口
├── app.go                  # 应用逻辑与绑定方法
├── go.mod                  # Go 模块定义
├── go.sum                  # 依赖锁定
├── wails.json              # Wails 配置
├── config/
│   └── voices.yaml         # 音色配置
├── backend/
│   ├── models/
│   │   └── models.go       # 数据模型定义
│   ├── controllers/
│   │   ├── project_controller.go
│   │   ├── chapter_controller.go
│   │   ├── character_controller.go
│   │   └── voice_controller.go
│   ├── services/
│   │   ├── project_service.go
│   │   ├── chapter_service.go
│   │   ├── character_service.go
│   │   └── voice_service.go
│   ├── repositories/
│   │   ├── project_repository.go
│   │   ├── chapter_repository.go
│   │   └── character_repository.go
│   └── utils/
│       ├── database.go     # 数据库初始化
│       ├── voice_config.go # 音色配置加载
│       └── llm_client.go   # LLM 客户端
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── main.tsx
│   │   ├── style.css
│   │   ├── components/
│   │   │   ├── ChapterManager.tsx
│   │   │   └── RoleManager.tsx
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── ProjectDetailsPage.tsx
│   │   │   └── ChapterEditor.tsx
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── api.ts
│   │   └── assets/
│   │       ├── fonts/
│   │       └── images/
│   ├── wailsjs/            # Wails 生成的绑定
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── build/                   # 构建输出目录
```

## 架构分层

### 层级职责

| 层级 | 职责 | 模型 |
|------|------|------|
| Controllers | 接收请求、参数转发、调用 Service | models.* |
| Services | 业务逻辑、模型转换 | models.* ↔ repositories.* |
| Repositories | 数据访问、SQL 操作 | repositories.* |

### 模型转换

- Repo 层使用自己的模型（`repositories.Chapter`、`repositories.Paragraph` 等）
- Service 层负责模型转换（`toRepoXxx`、`toModelsXxx`）
- Controller 和上层统一使用 `models.*` 模型

## 数据模型

### Project (工程)

| 字段 | 类型 | 说明 |
|------|------|------|
| ID | int64 | 主键 |
| Name | string | 工程名称 |
| Description | string | 工程描述 |
| CreatedAt | time.Time | 创建时间 |
| UpdatedAt | time.Time | 更新时间 |

### Chapter (章节)

| 字段 | 类型 | 说明 |
|------|------|------|
| ID | int64 | 主键 |
| ProjectID | int64 | 所属工程ID |
| Title | string | 章节标题 |
| Content | string | 章节原始内容 |
| OrderIndex | int | 排序索引 |
| ParagraphList | []Paragraph | 段落列表 |
| CreatedAt | time.Time | 创建时间 |
| UpdatedAt | time.Time | 更新时间 |

### Paragraph (段落/音轨)

| 字段 | 类型 | 说明 |
|------|------|------|
| ID | int64 | 主键 |
| ChapterID | int64 | 所属章节ID |
| Content | string | 文本内容 |
| Speaker | string | 说话角色 |
| Tone | string | 情感参数 |
| VoiceID | string | 音色ID |
| Speed | float64 | 语速 (0.5-2.0) |
| AudioPath | string | 音频文件路径 |
| Duration | float64 | 音频时长(秒) |
| OrderIndex | int | 排序索引 |
| CreatedAt | time.Time | 创建时间 |
| UpdatedAt | time.Time | 更新时间 |

### Character (角色)

| 字段 | 类型 | 说明 |
|------|------|------|
| ID | int64 | 主键 |
| ProjectID | int64 | 所属工程ID |
| Name | string | 角色名称 |
| Description | string | 角色简介 |
| VoiceID | string | 默认音色ID |
| CreatedAt | time.Time | 创建时间 |
| UpdatedAt | time.Time | 更新时间 |

### Voice (音色)

| 字段 | 类型 | 说明 |
|------|------|------|
| ID | string | 音色ID (火山引擎) |
| Name | string | 音色名称 |
| Description | string | 音色描述 |
| SupportedTones | []string | 支持的情感列表 |
| Language | string | 语言 |

## 情感参数常量

| 常量 | 值 | 说明 |
|------|-----|------|
| ToneNeutral | "neutral" | 中性 |
| ToneHappy | "happy" | 开心 |
| ToneSad | "sad" | 悲伤 |
| ToneAngry | "angry" | 愤怒 |
| ToneExcited | "excited" | 兴奋 |
| ToneFearful | "fearful" | 恐惧 |
| ToneSurprised | "surprised" | 惊讶 |
| ToneDisgusted | "disgusted" | 厌恶 |

## 语速范围

- 最小值: 0.5
- 最大值: 2.0
- 默认值: 1.0

## 外部 API 集成

### 1. 文本大模型 (火山引擎)

**用途**: 小说文本智能解析
- 识别小说角色
- 自动划分章节
- 拆分对话段落
- 识别说话角色和语气

**API 文档**: https://www.volcengine.com/docs/82379/1399008

### 2. 语音合成大模型 (火山引擎)

**用途**: 将文本转换为音频

**API 文档**: https://www.volcengine.com/docs/6561/1257584

### 3. 音色列表 (火山引擎)

**用途**: 获取可用音色信息

**API 文档**: https://www.volcengine.com/docs/6561/1257544

## 前端页面结构

### 1. HomePage (首页)

**功能**:
- 展示工程列表
- 创建新工程
- 打开/删除工程

### 2. ProjectDetailsPage (工程详情页)

**功能**:
- 章节列表管理 (增删改、排序)
- 导入小说文本
- 角色管理 (配置角色、对应音色)
- 触发文本解析 (调用 LLM)

### 3. ChapterEditor (章节编辑页)

**界面风格**: 仿 Adobe 视频剪辑软件

**功能**:
- 时间轴/音轨视图展示段落
- 选择段落高亮对应文本
- 编辑段落配置 (音色、情感、语速)
- 调整段落顺序
- 删除段落
- 批量/单个生成音频
- 音频试听

## 后端 API (Wails Bindings)

### 工程管理

```go
CreateProject(name, description string) (int64, error)
GetProjects() ([]*Project, error)
GetProject(id int64) (*Project, error)
UpdateProject(id int64, name, description string) error
DeleteProject(id int64) error
```

### 章节管理

```go
CreateChapter(projectID int64, title, content string) (int64, error)
GetChapters(projectID int64) ([]*Chapter, error)
GetChapter(id int64) (*Chapter, error)
UpdateChapter(id int64, title, content string) error
DeleteChapter(id int64) error
ReorderChapters(projectID int64, chapterIDs []int64) error
```

### 段落管理

```go
CreateParagraph(chapterID int64, content, speaker, tone, voiceID string, speed float64) (int64, error)
GetParagraphs(chapterID int64) ([]*Paragraph, error)
GetParagraph(id int64) (*Paragraph, error)
UpdateParagraph(id int64, content, speaker, tone, voiceID string, speed float64, audioPath string, duration float64, orderIndex int) error
DeleteParagraph(id int64) error
```

### 角色管理

```go
CreateCharacter(projectID int64, name, description, voiceID string) (int64, error)
GetCharacters(projectID int64) ([]*Character, error)
GetCharacter(id int64) (*Character, error)
UpdateCharacter(id int64, name, description, voiceID string) error
DeleteCharacter(id int64) error
```

### 音色管理

```go
GetVoices() ([]*Voice, error)
GetVoice(id string) (*Voice, error)
```

### LLM 文本解析

```go
SetLLMConfig(apiKey, endpoint, modelName string)
GetLLMConfig() LLMConfig
SplitParagraph(chapterID int64) ([]*Paragraph, error)
SplitParagraphPreview(content string) ([]*Paragraph, error)
```

### 待实现 API

- 语音合成 API
- 音频播放控制 API

## 数据库表结构

### projects 表

```sql
CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);
```

### chapters 表

```sql
CREATE TABLE chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);
```

### paragraphs 表

```sql
CREATE TABLE paragraphs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    content TEXT NOT NULL,
    speaker TEXT,
    tone TEXT,
    voice_id TEXT,
    speed REAL NOT NULL DEFAULT 1.0,
    audio_path TEXT,
    duration REAL,
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);
```

### characters 表

```sql
CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    voice_id TEXT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);
```

### voices 表

```sql
CREATE TABLE voices (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    supported_tones TEXT,
    language TEXT
);
```

## 配置文件

### voices.yaml

音色配置文件，定义可用的音色列表。

## 开发命令

| 命令 | 说明 |
|------|------|
| `wails dev` | 启动开发模式 (带热重载) |
| `wails build` | 构建生产版本 |

## 主要工作流程

1. **创建工程** → 输入工程名称和描述
2. **导入文本** → 导入小说全文
3. **智能解析** → 调用 LLM 自动识别角色、划分章节和段落
4. **编辑配置** → 在工程详情页配置角色音色
5. **精调段落** → 在章节编辑页调整各段落的音色、情感、语速
6. **生成音频** → 批量或单个生成音频
7. **试听调整** → 试听并按需重新生成
8. **导出成品** → (待规划)

## 注意事项

- 依赖版本尽量使用稳定版
- 前端部分不要添加新依赖
- Repo 层继续使用 repo 层模型，Controller 层和 Service 层使用 models 模型
