# 听墨语 - 有声小说制作应用实现方案

## 项目概述

**软件名称**：听墨语
**技术栈**：Wails + React + TypeScript + SQLite3
**软件风格**：仿照 Adobe 视频剪辑软件风格
**目标用户**：有声小说创作者、播客制作人

## 技术架构设计

### 1. 项目结构

```
tmy2/
├── backend/                 # Go 后端代码
│   ├── models/             # 数据模型定义
│   ├── services/          # 业务逻辑服务
│   ├── repositories/      # 数据访问层
│   ├── api/               # API 接口
│   └── utils/             # 工具函数
├── frontend/              # React 前端代码
│   ├── src/
│   │   ├── components/    # React 组件
│   │   ├── pages/        # 页面组件
│   │   ├── hooks/        # 自定义 Hooks
│   │   ├── utils/        # 工具函数
│   │   ├── types/        # TypeScript 类型定义
│   │   └── assets/       # 静态资源
│   ├── package.json
│   └── tsconfig.json
├── main.go                # 应用入口
├── app.go                 # Wails 应用实例
├── go.mod/go.sum          # Go 依赖
└── wails.json             # Wails 配置
```

### 2. 后端架构设计

#### 2.1 数据模型设计

**工程（Project）模型**：
```go
type Project struct {
    ID          int64     `json:"id"`
    Name        string    `json:"name"`
    Description string    `json:"description"`
    CreatedAt   time.Time `json:"createdAt"`
    UpdatedAt   time.Time `json:"updatedAt"`
}
```

**章节（Chapter）模型**：
```go
type Chapter struct {
    ID         int64     `json:"id"`
    ProjectID  int64     `json:"projectId"`
    Title      string    `json:"title"`
    Content    string    `json:"content"`
    OrderIndex int       `json:"orderIndex"`
    CreatedAt  time.Time `json:"createdAt"`
    UpdatedAt  time.Time `json:"updatedAt"`
}
```

**段落（Paragraph）模型**：
```go
type Paragraph struct {
    ID              int64     `json:"id"`
    ChapterID       int64     `json:"chapterId"`
    Content         string    `json:"content"`
    Speaker         string    `json:"speaker"` // 说话角色
    Tone            string    `json:"tone"`    // 情感参数
    VoiceID         string    `json:"voiceId"` // 音色ID
    Speed           float64   `json:"speed"`   // 语速
    AudioPath       string    `json:"audioPath"` // 音频文件路径
    Duration        float64   `json:"duration"` // 音频时长
    OrderIndex      int       `json:"orderIndex"`
    CreatedAt       time.Time `json:"createdAt"`
    UpdatedAt       time.Time `json:"updatedAt"`
}
```

**角色（Character）模型**：
```go
type Character struct {
    ID          int64     `json:"id"`
    ProjectID   int64     `json:"projectId"`
    Name        string    `json:"name"`
    Description string    `json:"description"`
    VoiceID     string    `json:"voiceId"` // 默认音色
    CreatedAt   time.Time `json:"createdAt"`
    UpdatedAt   time.Time `json:"updatedAt"`
}
```

**音色（Voice）模型**：
```go
type Voice struct {
    ID              string   `json:"id"`
    Name            string   `json:"name"`
    Description     string   `json:"description"`
    SupportedTones  []string `json:"supportedTones"`
    Language        string   `json:"language"`
}
```

#### 2.2 服务层设计

**工程服务**：
- `CreateProject()` - 创建工程
- `GetProjects()` - 获取工程列表
- `GetProjectByID()` - 获取工程详情
- `UpdateProject()` - 更新工程
- `DeleteProject()` - 删除工程

**章节服务**：
- `CreateChapter()` - 创建章节
- `GetChaptersByProject()` - 获取工程章节列表
- `GetChapterByID()` - 获取章节详情
- `UpdateChapter()` - 更新章节
- `DeleteChapter()` - 删除章节
- `ImportChapters()` - 导入多章节文本

**段落服务**：
- `CreateParagraph()` - 创建段落
- `GetParagraphsByChapter()` - 获取章节段落列表
- `GetParagraphByID()` - 获取段落详情
- `UpdateParagraph()` - 更新段落
- `DeleteParagraph()` - 删除段落
- `ReorderParagraphs()` - 调整段落顺序

**角色服务**：
- `CreateCharacter()` - 创建角色
- `GetCharactersByProject()` - 获取工程角色列表
- `GetCharacterByID()` - 获取角色详情
- `UpdateCharacter()` - 更新角色
- `DeleteCharacter()` - 删除角色

**AI 服务**：
- `AnalyzeText()` - 调用文本大模型分析小说内容
- `GenerateAudio()` - 调用语音合成大模型生成音频
- `GenerateBatchAudio()` - 批量生成音频

#### 2.3 数据库设计

使用 SQLite3 数据库，主要表结构：
- `projects` - 工程表
- `chapters` - 章节表
- `paragraphs` - 段落表
- `characters` - 角色表
- `voices` - 音色表（预加载数据）

### 3. 前端架构设计

#### 3.1 页面设计

**首页（工程列表页）**：
- 工程卡片展示
- 创建新工程按钮
- 工程搜索和筛选功能
- 工程导入导出功能

**工程详情页**：
- 工程基本信息
- 章节列表管理
- 角色管理
- 导入章节文本功能

**章节编辑页**：
- 音轨时间轴视图（仿照视频编辑器）
- 段落列表展示
- 段落属性编辑面板
- 音频播放和预览功能
- 批量生成音频功能

#### 3.2 组件设计

**通用组件**：
- `Button` - 按钮组件
- `Input` - 输入框组件
- `Select` - 下拉选择组件
- `Modal` - 模态框组件
- `Loading` - 加载动画组件

**业务组件**：
- `ProjectCard` - 工程卡片组件
- `ChapterList` - 章节列表组件
- `CharacterList` - 角色列表组件
- `ParagraphItem` - 段落项组件
- `AudioTrack` - 音轨组件
- `PropertyPanel` - 属性面板组件
- `Timeline` - 时间轴组件

#### 3.3 状态管理

使用 React Context + useState 进行简单状态管理，或者使用 Redux Toolkit 进行复杂状态管理。

### 4. 核心功能实现计划

#### 4.1 第一阶段：基础框架和数据管理

**任务**：
1. 初始化项目结构
2. 设计并实现数据模型
3. 实现数据库操作
4. 实现工程基本增删改查功能
5. 实现基础 UI 组件

**预计完成时间**：2-3 天

#### 4.2 第二阶段：章节和段落管理

**任务**：
1. 实现章节管理功能
2. 实现段落管理功能
3. 实现文本导入功能
4. 实现段落顺序调整
5. 实现基础音轨界面

**预计完成时间**：3-4 天

#### 4.3 第三阶段：角色管理和 AI 分析

**任务**：
1. 实现角色管理功能
2. 集成火山引擎文本分析 API
3. 实现小说文本分析功能
4. 实现角色识别和段落拆分
5. 实现情感分析功能

**预计完成时间**：3-4 天

#### 4.4 第四阶段：音频合成和播放

**任务**：
1. 集成火山引擎语音合成 API
2. 实现单个段落音频生成
3. 实现批量音频生成
4. 实现音频播放功能
5. 实现音频导出功能

**预计完成时间**：3-4 天

#### 4.5 第五阶段：高级编辑功能

**任务**：
1. 实现音轨时间轴
2. 实现段落编辑和调整
3. 实现音频剪辑功能
4. 实现多轨道编辑
5. 优化用户体验

**预计完成时间**：4-5 天

#### 4.6 第六阶段：测试和优化

**任务**：
1. 功能测试
2. 性能优化
3. 界面优化
4. 文档完善
5. 部署测试

**预计完成时间**：2-3 天

### 5. 外部系统集成

#### 5.1 火山引擎文本大模型

**API 地址**：https://www.volcengine.com/docs/82379/1399008?lang=zh
**功能**：
- 小说文本分析
- 角色识别
- 情感分析
- 段落拆分

#### 5.2 火山引擎语音合成

**API 地址**：https://www.volcengine.com/docs/6561/1257584?lang=zh
**功能**：
- 文本转语音
- 多音色支持
- 情感参数调节
- 语速控制

#### 5.3 火山引擎音色库

**API 地址**：https://www.volcengine.com/docs/6561/1257544?lang=zh
**功能**：
- 音色查询
- 音色属性获取
- 音色分类

### 6. 界面设计风格

#### 6.1 整体风格

- 深色主题（仿照 Adobe Premiere）
- 清晰的区域分隔
- 现代化 UI 组件
- 响应式设计

#### 6.2 主色调

- 背景色：#1B2636
- 主色调：#00A8FF
- 辅助色：#FF6B6B、#4ECDC4
- 文字色：#FFFFFF、#B0BEC5

#### 6.3 布局结构

- 顶部：菜单栏和工具栏
- 左侧：项目资源面板
- 中间：主编辑区域（音轨时间轴）
- 右侧：属性和参数面板
- 底部：时间轴控制和状态信息

### 7. 开发规范

#### 7.1 Go 代码规范

- 使用 Go 1.18+
- 遵循 Go 官方代码规范
- 使用 context 进行超时控制
- 错误处理和日志记录
- 单元测试覆盖率 ≥ 60%

#### 7.2 React 代码规范

- 使用 TypeScript
- 遵循 React 17+ 规范
- 使用函数组件和 Hooks
- 代码分割和懒加载
- 组件测试

### 8. 部署和分发

#### 8.1 构建方式

- 使用 Wails 打包工具
- 支持 Windows、macOS、Linux 平台
- 包含 SQLite3 数据库
- 静态资源嵌入

#### 8.2 版本管理

- 使用语义化版本控制
- 发布前进行全面测试
- 提供更新日志
- 支持自动更新

### 9. 风险评估和应对

#### 9.1 技术风险

- **API 调用限制**：火山引擎 API 有调用次数和频率限制
  - 应对方案：实现 API 调用缓存和重试机制

- **音频生成质量**：AI 语音合成质量可能不符合预期
  - 应对方案：提供多种音色选择和参数调节

- **大文件处理**：大型小说文件处理可能导致性能问题
  - 应对方案：实现分块处理和进度显示

#### 9.2 用户体验风险

- **学习曲线陡峭**：音轨编辑界面复杂
  - 应对方案：提供详细的帮助文档和视频教程

- **操作失误**：误操作可能导致数据丢失
  - 应对方案：实现操作历史记录和撤销/重做功能

### 10. 验收标准

#### 10.1 功能完整性

- 所有 PRD 中规定的功能必须实现
- 所有外部 API 集成正常
- 数据管理功能稳定
- 音频生成和播放功能正常

#### 10.2 性能指标

- 工程加载时间 < 3秒
- 音频生成时间 < 10秒/段落
- 应用响应时间 < 2秒
- 内存使用率 < 500MB

#### 10.3 用户体验

- 界面美观、直观
- 操作流程顺畅
- 错误提示清晰
- 帮助文档完善

---

**文档版本**：v1.0
**创建时间**：2026-02-15
**最后更新**：2026-02-15
**作者**：开发团队
