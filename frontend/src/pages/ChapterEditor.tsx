import React, { useState, useEffect, useRef } from 'react';
import {
  useParams,
  useNavigate,
  Link,
} from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  Pause,
  Trash2,
  GripVertical,
  Mic,
  Music,
  Volume2,
  Settings,
  Zap,
  Clock,
  Edit2,
  X,
  Check,
} from 'lucide-react';
import api from '../utils/api';
import { Chapter, Paragraph, Character, Voice, SupportedTones, DefSpeed } from '../types';

interface TimelineSegment {
  id: number;
  start: number;
  end: number;
  paragraph: Paragraph;
}

const ChapterEditor: React.FC = () => {
  const { projectId, chapterId } = useParams<{ projectId: string; chapterId: string }>();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedParagraphId, setSelectedParagraphId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [showEditPanel, setShowEditPanel] = useState(false);
  const [editingParagraph, setEditingParagraph] = useState<Paragraph | null>(null);
  const [editForm, setEditForm] = useState({
    content: '',
    speaker: '',
    tone: 'neutral',
    voiceId: '',
    speed: DefSpeed,
  });
  const timelineRef = useRef<HTMLDivElement>(null);

  // 模拟数据 - 实际项目中从 API 获取
  const mockParagraphs: Paragraph[] = [
    {
      id: 1,
      chapterId: parseInt(chapterId || '0'),
      content: '这是一个宁静的夜晚，月光透过窗户洒进房间。',
      speaker: '旁白',
      tone: 'neutral',
      voiceId: 'BV001',
      speed: 1.0,
      audioPath: '',
      duration: 3.5,
      orderIndex: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      chapterId: parseInt(chapterId || '0'),
      content: '"你来了。"她轻声说道，声音中带着一丝颤抖。',
      speaker: '女主角',
      tone: 'sad',
      voiceId: 'BV002',
      speed: 0.9,
      audioPath: '',
      duration: 2.8,
      orderIndex: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 3,
      chapterId: parseInt(chapterId || '0'),
      content: '"是的，我来了。"他站在门口，身影被月光拉得很长。',
      speaker: '男主角',
      tone: 'neutral',
      voiceId: 'BV001',
      speed: 1.0,
      audioPath: '',
      duration: 3.2,
      orderIndex: 2,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 4,
      chapterId: parseInt(chapterId || '0'),
      content: '"为什么选择现在回来？"她转过身，眼中闪烁着泪光。',
      speaker: '女主角',
      tone: 'sad',
      voiceId: 'BV002',
      speed: 0.85,
      audioPath: '',
      duration: 3.0,
      orderIndex: 3,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 5,
      chapterId: parseInt(chapterId || '0'),
      content: '"因为我知道，这里才是我的归宿。"他缓缓走进房间，每一步都像是踩在她的心上。',
      speaker: '男主角',
      tone: 'sad',
      voiceId: 'BV003',
      speed: 0.95,
      audioPath: '',
      duration: 4.2,
      orderIndex: 4,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    if (chapterId) {
      loadData();
    }
  }, [chapterId, projectId]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // 加载章节信息
      const chapterData = await api.getChapter(parseInt(chapterId || '0'));
      setChapter(chapterData);

      // 加载角色列表
      if (projectId) {
        const charData = await api.getCharacters(parseInt(projectId));
        setCharacters(charData);
      }

      // 加载音色列表
      const voiceData = await api.getVoices();
      setVoices(voiceData);

      // 模拟段落数据
      setParagraphs(mockParagraphs);
      calculateTotalDuration(mockParagraphs);
    } catch (error) {
      console.error('Failed to load data:', error);
    }
    setIsLoading(false);
  };

  const calculateTotalDuration = (paras: Paragraph[]) => {
    const total = paras.reduce((sum, p) => sum + (p.duration || 0), 0);
    setTotalDuration(total);
  };

  // 计算时间轴片段
  const getTimelineSegments = (): TimelineSegment[] => {
    let currentTime = 0;
    return paragraphs.map((p) => {
      const start = currentTime;
      const end = currentTime + (p.duration || 2);
      currentTime = end;
      return { id: p.id, start, end, paragraph: p };
    });
  };

  const timelineSegments = getTimelineSegments();

  // 选择段落
  const handleSelectParagraph = (id: number) => {
    setSelectedParagraphId(id);
    const paragraph = paragraphs.find((p) => p.id === id);
    if (paragraph) {
      setEditingParagraph(paragraph);
      setEditForm({
        content: paragraph.content,
        speaker: paragraph.speaker || '',
        tone: paragraph.tone || 'neutral',
        voiceId: paragraph.voiceId || '',
        speed: paragraph.speed || DefSpeed,
      });
      setShowEditPanel(true);
    }
  };

  // 保存编辑
  const handleSaveEdit = () => {
    if (!editingParagraph) return;

    const updatedParagraphs = paragraphs.map((p) =>
      p.id === editingParagraph.id
        ? { ...p, ...editForm }
        : p
    );
    setParagraphs(updatedParagraphs);
    setShowEditPanel(false);
    setEditingParagraph(null);
  };

  // 删除段落
  const handleDeleteParagraph = (id: number) => {
    if (!window.confirm('确定要删除此段落吗？')) return;
    const updatedParagraphs = paragraphs.filter((p) => p.id !== id);
    setParagraphs(updatedParagraphs);
    calculateTotalDuration(updatedParagraphs);
    if (selectedParagraphId === id) {
      setSelectedParagraphId(null);
      setShowEditPanel(false);
    }
  };

  // 生成单个音频
  const handleGenerateAudio = async (id: number) => {
    console.log('Generating audio for paragraph:', id);
    // 模拟生成音频
  };

  // 批量生成音频
  const handleGenerateAllAudio = async () => {
    console.log('Generating all audio');
    // 模拟批量生成
  };

  // 播放控制
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // 格式化时间显示
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 100);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
  };

  // 获取角色颜色
  const getSpeakerColor = (speaker: string): string => {
    const colors: Record<string, string> = {
      '旁白': '#00A8FF',
      '男主角': '#FF6B6B',
      '女主角': '#FF8EC7',
    };
    return colors[speaker] || '#95A5A6';
  };

  if (isLoading) {
    return (
      <div className="chapter-editor">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="chapter-editor">
        <div className="error-container">
          <h2>章节不存在</h2>
          <Link to={`/project/${projectId}`} className="btn-primary">
            <ArrowLeft size={16} />
            返回项目
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="chapter-editor">
      {/* 顶部导航栏 */}
      <header className="editor-header">
        <div className="header-left">
          <Link to={`/project/${projectId}`} className="back-button">
            <ArrowLeft size={18} />
            <span>返回</span>
          </Link>
          <div className="divider"></div>
          <div className="chapter-title">
            <h1>{chapter.title}</h1>
            <p className="subtitle">章节编辑 · 时间轴视图</p>
          </div>
        </div>
        <div className="header-right">
          <button
            className="btn-secondary"
            onClick={() => console.log('Import text')}
          >
            <Edit2 size={16} />
            编辑文本
          </button>
          <button
            className="btn-primary"
            onClick={handleGenerateAllAudio}
          >
            <Zap size={16} />
            批量生成
          </button>
        </div>
      </header>

      {/* 主编辑区域 */}
      <div className="editor-main">
        {/* 左侧文本面板 */}
        <div className="text-panel">
          <div className="panel-header">
            <h2>文本内容</h2>
          </div>
          <div className="text-content">
            {paragraphs.map((paragraph, index) => (
              <div
                key={paragraph.id}
                className={`text-paragraph ${
                  selectedParagraphId === paragraph.id ? 'selected' : ''
                }`}
                onClick={() => handleSelectParagraph(paragraph.id)}
              >
                <div
                  className="speaker-badge"
                  style={{ backgroundColor: getSpeakerColor(paragraph.speaker) }}
                >
                  {paragraph.speaker || '旁白'}
                </div>
                <p className="paragraph-text">{paragraph.content}</p>
                <div className="paragraph-meta">
                  {paragraph.audioPath ? (
                    <span className="has-audio">
                      <Volume2 size={12} />
                      已生成
                    </span>
                  ) : (
                    <span className="no-audio">未生成</span>
                  )}
                  <span className="duration">
                    <Clock size={12} />
                    {(paragraph.duration || 0).toFixed(1)}s
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 中间时间轴面板 */}
        <div className="timeline-panel">
          <div className="panel-header">
            <div className="transport-controls">
              <button
                className={`play-btn ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <div className="time-display">
                {formatTime(currentTime)} / {formatTime(totalDuration)}
              </div>
            </div>
          </div>

          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-ruler">
              {Array.from({ length: Math.ceil(totalDuration) + 1 }).map((_, i) => (
                <div key={i} className="ruler-mark" style={{ left: `${(i / totalDuration) * 100}%` }}>
                  <span className="ruler-label">{i}s</span>
                </div>
              ))}
            </div>

            <div className="timeline-track">
              {timelineSegments.map((segment) => (
                <div
                  key={segment.id}
                  className={`timeline-clip ${
                    selectedParagraphId === segment.id ? 'selected' : ''
                  }`}
                  style={{
                    left: `${(segment.start / totalDuration) * 100}%`,
                    width: `${((segment.end - segment.start) / totalDuration) * 100}%`,
                    backgroundColor: getSpeakerColor(segment.paragraph.speaker),
                  }}
                  onClick={() => handleSelectParagraph(segment.id)}
                >
                  <div className="clip-content">
                    <div className="clip-speaker">
                      <Mic size={14} />
                      {segment.paragraph.speaker || '旁白'}
                    </div>
                    <div className="clip-text">
                      {segment.paragraph.content.slice(0, 40)}
                      {segment.paragraph.content.length > 40 ? '...' : ''}
                    </div>
                  </div>
                  {segment.paragraph.audioPath && (
                    <div className="clip-indicator">
                      <Music size={12} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              className="playhead"
              style={{ left: `${(currentTime / totalDuration) * 100}%` }}
            />
          </div>
        </div>

        {/* 右侧属性面板 */}
        <div className={`properties-panel ${showEditPanel ? 'open' : ''}`}>
          {showEditPanel && editingParagraph ? (
            <>
              <div className="panel-header">
                <h2>段落属性</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowEditPanel(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="panel-content">
                <div className="form-group">
                  <label>文本内容</label>
                  <textarea
                    value={editForm.content}
                    onChange={(e) =>
                      setEditForm({ ...editForm, content: e.target.value })
                    }
                    rows={4}
                  />
                </div>

                <div className="form-group">
                  <label>说话角色</label>
                  <select
                    value={editForm.speaker}
                    onChange={(e) =>
                      setEditForm({ ...editForm, speaker: e.target.value })
                    }
                  >
                    <option value="">旁白</option>
                    {characters.map((char) => (
                      <option key={char.id} value={char.name}>
                        {char.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>音色</label>
                  <select
                    value={editForm.voiceId}
                    onChange={(e) =>
                      setEditForm({ ...editForm, voiceId: e.target.value })
                    }
                  >
                    <option value="">请选择音色</option>
                    {voices.map((voice) => (
                      <option key={voice.id} value={voice.id}>
                        {voice.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>情感</label>
                  <select
                    value={editForm.tone}
                    onChange={(e) =>
                      setEditForm({ ...editForm, tone: e.target.value })
                    }
                  >
                    {SupportedTones.map((tone) => (
                      <option key={tone.value} value={tone.value}>
                        {tone.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <div className="label-row">
                    <label>语速</label>
                    <span className="value-badge">{editForm.speed.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.05"
                    value={editForm.speed}
                    onChange={(e) =>
                      setEditForm({ ...editForm, speed: parseFloat(e.target.value) })
                    }
                  />
                  <div className="range-labels">
                    <span>0.5x</span>
                    <span>1.0x</span>
                    <span>2.0x</span>
                  </div>
                </div>

                <div className="action-buttons">
                  <button
                    className="btn-generate"
                    onClick={() => handleGenerateAudio(editingParagraph.id)}
                  >
                    <Zap size={16} />
                    生成音频
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteParagraph(editingParagraph.id)}
                  >
                    <Trash2 size={16} />
                    删除
                  </button>
                </div>

                <div className="save-bar">
                  <button
                    className="btn-secondary"
                    onClick={() => setShowEditPanel(false)}
                  >
                    取消
                  </button>
                  <button className="btn-primary" onClick={handleSaveEdit}>
                    <Check size={16} />
                    保存
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-properties">
              <Settings size={40} />
              <p>选择一个段落来编辑属性</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .chapter-editor {
          background-color: #0F1419;
          color: #ECF0F1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* 顶部导航栏 */
        .editor-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .editor-header .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .editor-header .back-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          color: #94A3B8;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 8px;
          transition: all 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        .editor-header .back-button:hover {
          color: #ECF0F1;
          background: rgba(255, 255, 255, 0.06);
        }

        .editor-header .divider {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, transparent, #2A3442, transparent);
        }

        .editor-header .chapter-title h1 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 600;
          color: #F1F5F9;
        }

        .editor-header .subtitle {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        .editor-header .header-right {
          display: flex;
          gap: 10px;
        }

        .editor-header {
          max-width: none;
          margin: 0;
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* 主编辑区域 */
        .editor-main {
          flex: 1;
          display: flex;
          height: calc(100vh - 64px);
          overflow: hidden;
        }

        /* 面板通用 */
        .panel-header {
          padding: 14px 16px;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .panel-header h2 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          color: #CBD5E1;
        }

        /* 左侧文本面板 */
        .text-panel {
          width: 380px;
          background-color: #141920;
          border-right: 1px solid #2A3442;
          display: flex;
          flex-direction: column;
        }

        .text-content {
          flex: 1;
          overflow-y: auto;
          padding: 12px;
        }

        .text-paragraph {
          background: linear-gradient(145deg, #1E2530 0%, #1A212B 100%);
          border: 1px solid #2A3442;
          border-radius: 10px;
          padding: 12px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .text-paragraph:hover {
          border-color: #3A4A5C;
          transform: translateY(-1px);
        }

        .text-paragraph.selected {
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .speaker-badge {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
        }

        .paragraph-text {
          margin: 0 0 8px;
          color: #E2E8F0;
          font-size: 0.92rem;
          line-height: 1.6;
        }

        .paragraph-meta {
          display: flex;
          gap: 12px;
          font-size: 0.78rem;
          color: #64748B;
        }

        .has-audio {
          color: #4ECDC4;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .duration {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* 中间时间轴面板 */
        .timeline-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: #0F1419;
        }

        .transport-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .play-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.3);
        }

        .play-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0, 168, 255, 0.4);
        }

        .play-btn.playing {
          background: linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%);
          box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
        }

        .time-display {
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
          font-size: 0.95rem;
          color: #00A8FF;
          background-color: rgba(0, 168, 255, 0.1);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .timeline-container {
          flex: 1;
          position: relative;
          overflow-x: auto;
          overflow-y: hidden;
          padding: 20px;
        }

        .timeline-ruler {
          position: relative;
          height: 28px;
          margin-bottom: 8px;
          border-bottom: 1px solid #2A3442;
        }

        .ruler-mark {
          position: absolute;
          top: 0;
          height: 100%;
          border-left: 1px solid #2A3442;
          padding-left: 4px;
        }

        .ruler-label {
          font-size: 0.72rem;
          color: #64748B;
        }

        .timeline-track {
          position: relative;
          height: 200px;
          background: linear-gradient(180deg, #141920 0%, #11161C 100%);
          border-radius: 10px;
          border: 1px solid #2A3442;
          overflow: hidden;
        }

        .timeline-clip {
          position: absolute;
          top: 20px;
          height: calc(100% - 40px);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px 12px;
          box-sizing: border-box;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          opacity: 0.9;
        }

        .timeline-clip:hover {
          opacity: 1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .timeline-clip.selected {
          outline: 2px solid white;
          outline-offset: 2px;
          opacity: 1;
        }

        .clip-content {
          overflow: hidden;
        }

        .clip-speaker {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          margin-bottom: 4px;
        }

        .clip-text {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.95);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clip-indicator {
          position: absolute;
          top: 6px;
          right: 6px;
          color: white;
        }

        .playhead {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #FF3B30;
          z-index: 50;
          pointer-events: none;
        }

        .playhead::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -5px;
          width: 12px;
          height: 12px;
          background-color: #FF3B30;
          border-radius: 50%;
        }

        /* 右侧属性面板 */
        .properties-panel {
          width: 320px;
          background-color: #141920;
          border-left: 1px solid #2A3442;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }

        .properties-panel:not(.open) {
          width: 0;
          border-left: none;
          overflow: hidden;
        }

        .properties-panel .close-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .properties-panel .close-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
        }

        .panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .empty-properties {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748B;
          gap: 12px;
        }

        .empty-properties p {
          margin: 0;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.85rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          background-color: #0F1419;
          border: 1px solid #2A3442;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .form-group textarea {
          min-height: 80px;
          resize: vertical;
          font-family: inherit;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .value-badge {
          padding: 2px 8px;
          background-color: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .form-group input[type="range"] {
          width: 100%;
          padding: 0;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .form-group input[type="range"]::-webkit-slider-track {
          height: 6px;
          background: #2A3442;
          border-radius: 3px;
        }

        .form-group input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border-radius: 50%;
          cursor: pointer;
          margin-top: -6px;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.3);
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: #64748B;
          margin-top: 4px;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
          padding-top: 8px;
          border-top: 1px solid #2A3442;
        }

        .btn-generate {
          flex: 1;
          padding: 10px 16px;
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-generate:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
        }

        .btn-delete {
          padding: 10px 14px;
          background: rgba(239, 68, 68, 0.15);
          color: #EF4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-delete:hover {
          background: rgba(239, 68, 68, 0.25);
        }

        .save-bar {
          display: flex;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid #2A3442;
        }

        .save-bar .btn-primary,
        .save-bar .btn-secondary {
          flex: 1;
        }

        /* 按钮样式 */
        .btn-primary,
        .btn-secondary {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-secondary {
          background: #2A3442;
          color: #E2E8F0;
          border: 1px solid #3A4A5C;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #3A4A5C;
          border-color: #4A5A6C;
        }

        /* 加载和错误状态 */
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          color: #CBD5E1;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid #2A3442;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-container h2 {
          margin: 0 0 20px;
        }
      `}</style>
    </div>
  );
};

export default ChapterEditor;
