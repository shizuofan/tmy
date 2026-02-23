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
  Save,
  Check,
  AlertCircle,
  FileText,
  Sparkles,
} from 'lucide-react';
import api from '../utils/api';
import { Chapter, Paragraph, CharacterInfo, Voice, SupportedTones, DefSpeed } from '../types';
import ConfirmModal from '../components/ConfirmModal';

interface TimelineSegment {
  id: number;
  start: number;
  end: number;
  paragraph: Paragraph;
}

interface ParagraphEditState {
  [key: number]: Paragraph;
}

const ChapterEditor: React.FC = () => {
  const { projectId, chapterId } = useParams<{ projectId: string; chapterId: string }>();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [paragraphs, setParagraphs] = useState<Paragraph[]>([]);
  const [originalParagraphs, setOriginalParagraphs] = useState<Paragraph[]>([]);
  const [knownCharacters, setKnownCharacters] = useState<CharacterInfo[]>([]);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedParagraphId, setSelectedParagraphId] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [editForm, setEditForm] = useState({
    content: '',
    speaker: '',
    tone: 'neutral',
    speed: DefSpeed,
  });
  const [dirtyParagraphs, setDirtyParagraphs] = useState<Set<number>>(new Set());
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showTextEditor, setShowTextEditor] = useState(false);
  const [chapterText, setChapterText] = useState('');
  const [isSavingChapter, setIsSavingChapter] = useState(false);
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [generateProgress, setGenerateProgress] = useState(0);
  const [generateTimeLeft, setGenerateTimeLeft] = useState('');
  const [showSpeakerDropdown, setShowSpeakerDropdown] = useState(false);
  const [speakerSearch, setSpeakerSearch] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorTitle, setErrorTitle] = useState('生成脚本失败');
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: 'warning' | 'danger' | 'info';
    onConfirm: (() => void) | null;
  }>({
    isOpen: false,
    title: '',
    message: '',
    type: 'warning',
    onConfirm: null,
  });
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [audioGenerateProgress, setAudioGenerateProgress] = useState(0);
  const speakerDropdownRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const generateProgressIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (chapterId) {
      loadData();
    }
  }, [chapterId, projectId]);

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (speakerDropdownRef.current && !speakerDropdownRef.current.contains(event.target as Node)) {
        setShowSpeakerDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 当选中的段落或段落列表变化时，更新 editForm
  useEffect(() => {
    if (selectedParagraphId && paragraphs.length > 0) {
      const paragraph = paragraphs.find((p) => p.id === selectedParagraphId);
      if (paragraph) {
        setEditForm({
          content: paragraph.content,
          speaker: paragraph.speaker || '',
          tone: paragraph.tone || 'neutral',
          speed: paragraph.speed || DefSpeed,
        });
      }
    }
  }, [selectedParagraphId, paragraphs]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // 加载章节信息
      const chapterData = await api.getChapter(parseInt(chapterId || '0'));
      setChapter(chapterData);
      setChapterText(chapterData.content || '');

      // 加载已知角色列表
      if (projectId) {
        const charData = await api.getProjectKnownCharacters(parseInt(projectId));
        setKnownCharacters(charData);
      }

      // 加载音色列表
      const voiceData = await api.getVoices();
      setVoices(voiceData);

      // 加载段落列表 - 从服务端读取
      const paraData = await api.getParagraphs(parseInt(chapterId || '0'));
      // 按 orderIndex 排序
      const sortedParas = [...paraData].sort((a, b) => a.orderIndex - b.orderIndex);
      setParagraphs(sortedParas);
      setOriginalParagraphs(sortedParas);
      calculateTotalDuration(sortedParas);

      // 默认选中第一个段落
      if (sortedParas.length > 0) {
        handleSelectParagraph(sortedParas[0].id);
      }
    } catch (error) {
      console.error('Failed to load data:', error);
    }
    setIsLoading(false);
  };

  // 打开文本编辑器
  const handleOpenTextEditor = () => {
    if (chapter) {
      setChapterText(chapter.content || '');
    }
    setShowTextEditor(true);
  };

  // 保存章节文本
  const handleSaveChapterText = async () => {
    if (!chapter) return;

    setIsSavingChapter(true);
    try {
      await api.updateChapter(chapter.id, chapter.title, chapterText);
      setChapter(prev => prev ? { ...prev, content: chapterText } : null);
      setShowTextEditor(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to save chapter:', error);
    }
    setIsSavingChapter(false);
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

  // 检查段落是否有修改
  const isParagraphDirty = (id: number): boolean => {
    return dirtyParagraphs.has(id);
  };

  // 选择段落
  const handleSelectParagraph = (id: number) => {
    // 如果选中的是同一个段落，不做处理
    if (id === selectedParagraphId) return;

    // 先应用当前编辑的修改到段落列表
    applyCurrentEdit();

    // 切换到新段落
    setSelectedParagraphId(id);
    const paragraph = paragraphs.find((p) => p.id === id);
    if (paragraph) {
      setEditForm({
        content: paragraph.content,
        speaker: paragraph.speaker || '',
        tone: paragraph.tone || 'neutral',
        speed: paragraph.speed || DefSpeed,
      });
    }
  };

  // 应用当前编辑到段落列表
  const applyCurrentEdit = () => {
    if (selectedParagraphId) {
      const updatedParagraphs = paragraphs.map((p) =>
        p.id === selectedParagraphId
          ? { ...p, ...editForm, voiceId: p.voiceId } // 保留 voiceId
          : p
      );
      setParagraphs(updatedParagraphs);
    }
  };

  // 处理表单变更 - 只更新表单状态并标记为脏
  const handleFormChange = (field: string, value: any) => {
    setEditForm({ ...editForm, [field]: value });
    if (selectedParagraphId) {
      setDirtyParagraphs(prev => new Set(prev).add(selectedParagraphId));
    }
  };

  // 保存所有修改到后端
  const handleSaveAll = async () => {
    if (dirtyParagraphs.size === 0) return;

    setIsSaving(true);
    try {
      // 先应用当前正在编辑的段落的修改
      applyCurrentEdit();

      // 逐个保存脏段落
      for (const id of dirtyParagraphs) {
        const paragraph = paragraphs.find(p => p.id === id);
        if (paragraph) {
          await api.updateParagraph(
            paragraph.id,
            paragraph.content,
            paragraph.speaker,
            paragraph.tone,
            paragraph.voiceId,
            paragraph.speed,
            paragraph.audioPath,
            paragraph.duration,
            paragraph.orderIndex
          );
        }
      }

      // 清空脏状态
      setDirtyParagraphs(new Set());
      // 更新原始段落数据
      setOriginalParagraphs(paragraphs);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to save paragraphs:', error);
    }
    setIsSaving(false);
  };

  // 撤销所有未保存的修改
  const handleUndoAll = () => {
    // 恢复原始段落数据
    setParagraphs(originalParagraphs);
    calculateTotalDuration(originalParagraphs);
    // 清空脏状态
    setDirtyParagraphs(new Set());
    // 如果有选中的段落，重新加载其表单
    if (selectedParagraphId) {
      const paragraph = originalParagraphs.find((p) => p.id === selectedParagraphId);
      if (paragraph) {
        setEditForm({
          content: paragraph.content,
          speaker: paragraph.speaker || '',
          tone: paragraph.tone || 'neutral',
          speed: paragraph.speed || DefSpeed,
        });
      } else if (originalParagraphs.length > 0) {
        // 如果原来选中的段落不存在了，选中第一个
        handleSelectParagraph(originalParagraphs[0].id);
      } else {
        setSelectedParagraphId(null);
      }
    }
  };

  // 删除段落
  const handleDeleteParagraph = (id: number) => {
    setConfirmModal({
      isOpen: true,
      title: '删除段落',
      message: '确定要删除此段落吗？',
      type: 'danger',
      onConfirm: () => {
        const updatedParagraphs = paragraphs.filter((p) => p.id !== id);
        setParagraphs(updatedParagraphs);
        calculateTotalDuration(updatedParagraphs);
        // 从脏状态中移除
        setDirtyParagraphs(prev => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
        if (selectedParagraphId === id) {
          if (updatedParagraphs.length > 0) {
            handleSelectParagraph(updatedParagraphs[0].id);
          } else {
            setSelectedParagraphId(null);
          }
        }
        setConfirmModal(prev => ({ ...prev, isOpen: false }));
      },
    });
  };

  // 生成单个音频
  const handleGenerateAudio = async (id: number) => {
    console.log('Generating audio for paragraph:', id);
    try {
      const updatedParagraph = await api.generateParagraphAudio(id);
      // 更新段落列表
      setParagraphs(prev => prev.map(p =>
        p.id === id ? updatedParagraph : p
      ));
      // 更新原始段落数据
      setOriginalParagraphs(prev => prev.map(p =>
        p.id === id ? updatedParagraph : p
      ));
      // 重新计算总时长
      calculateTotalDuration(paragraphs.map(p =>
        p.id === id ? updatedParagraph : p
      ));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to generate audio:', error);
      let msg = '生成音频失败';
      if (typeof error === 'string') {
        msg = error;
      } else if (error instanceof Error) {
        msg = error.message;
      } else if (error && typeof error === 'object') {
        msg = (error as any).message || (error as any).error || String(error);
      }
      setErrorTitle('生成音频失败');
      setErrorMessage(msg);
      setShowErrorModal(true);
    }
  };

  // 生成整个章节的音频
  const handleGenerateChapterAudio = async () => {
    if (!chapterId) return;

    const paragraphsWithoutAudio = paragraphs.filter(p => !p.audioPath);
    if (paragraphsWithoutAudio.length === 0) {
      setConfirmModal({
        isOpen: true,
        title: '重新生成音频',
        message: '所有段落都已有音频，确定要重新生成吗？',
        type: 'warning',
        onConfirm: () => {
          setConfirmModal(prev => ({ ...prev, isOpen: false }));
          doGenerateChapterAudio(paragraphs.map(p => p.id));
        },
      });
      return;
    }

    setConfirmModal({
      isOpen: true,
      title: '生成章节音频',
      message: `将为 ${paragraphsWithoutAudio.length} 个段落生成音频，确定继续吗？`,
      type: 'info',
      onConfirm: () => {
        setConfirmModal(prev => ({ ...prev, isOpen: false }));
        doGenerateChapterAudio(paragraphsWithoutAudio.map(p => p.id));
      },
    });
  };

  // 执行生成章节音频
  const doGenerateChapterAudio = async (paragraphIds: number[]) => {
    if (!chapterId) return;

    setIsGeneratingAudio(true);
    setAudioGenerateProgress(0);

    try {
      const updatedParagraphs = await api.generateChapterAudio(parseInt(chapterId));

      // 更新段落列表
      const updatedMap = new Map(updatedParagraphs.map(p => [p.id, p]));
      const newParagraphs = paragraphs.map(p => updatedMap.get(p.id) || p);

      setParagraphs(newParagraphs);
      setOriginalParagraphs(newParagraphs);
      calculateTotalDuration(newParagraphs);

      setAudioGenerateProgress(100);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveSuccess(false);
        setIsGeneratingAudio(false);
        setAudioGenerateProgress(0);
      }, 1500);
    } catch (error) {
      console.error('Failed to generate chapter audio:', error);
      setIsGeneratingAudio(false);
      setAudioGenerateProgress(0);
      let msg = '生成章节音频失败';
      if (typeof error === 'string') {
        msg = error;
      } else if (error instanceof Error) {
        msg = error.message;
      } else if (error && typeof error === 'object') {
        msg = (error as any).message || (error as any).error || String(error);
      }
      setErrorTitle('生成章节音频失败');
      setErrorMessage(msg);
      setShowErrorModal(true);
    }
  };

  // 清理进度定时器
  const clearProgressInterval = () => {
    if (generateProgressIntervalRef.current) {
      clearInterval(generateProgressIntervalRef.current);
      generateProgressIntervalRef.current = null;
    }
  };

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      clearProgressInterval();
    };
  }, []);

  // 执行生成脚本
  const doGenerateScript = async () => {
    if (!chapterId) return;

    setIsGeneratingScript(true);
    setGenerateProgress(0);
    setGenerateTimeLeft('预计 3-5 分钟');

    // 模拟进度动画（总预计时间按4分钟=240秒计算）
    const totalEstimatedTime = 240; // 秒
    let elapsed = 0;

    clearProgressInterval();
    generateProgressIntervalRef.current = window.setInterval(() => {
      elapsed += 1;
      const progress = Math.min((elapsed / totalEstimatedTime) * 100, 95); // 最多到95%，留5%给实际完成
      const remaining = Math.max(totalEstimatedTime - elapsed, 0);
      const mins = Math.floor(remaining / 60);
      const secs = remaining % 60;

      setGenerateProgress(progress);
      if (remaining > 0) {
        setGenerateTimeLeft(`预计剩余 ${mins}分${secs}秒`);
      } else {
        setGenerateTimeLeft('即将完成...');
      }
    }, 1000);

    try {
      // 调用 splitParagraph 方法生成并保存段落
      const newParagraphs = await api.splitParagraph(parseInt(chapterId));

      // 完成时设置100%
      setGenerateProgress(100);
      setGenerateTimeLeft('完成！');

      // 短暂显示完成状态
      await new Promise(resolve => setTimeout(resolve, 500));

      // 更新本地状态
      const sortedParas = [...newParagraphs].sort((a, b) => a.orderIndex - b.orderIndex);
      setParagraphs(sortedParas);
      setOriginalParagraphs(sortedParas);
      calculateTotalDuration(sortedParas);
      setDirtyParagraphs(new Set());

      // 默认选中第一个段落
      if (sortedParas.length > 0) {
        handleSelectParagraph(sortedParas[0].id);
      } else {
        setSelectedParagraphId(null);
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
      // 成功时清理状态
      clearProgressInterval();
      setIsGeneratingScript(false);
      setTimeout(() => {
        setGenerateProgress(0);
        setGenerateTimeLeft('');
      }, 1000);
    } catch (error) {
      console.error('Failed to generate script:', error);
      // 失败时立即停止进度动画
      clearProgressInterval();
      setIsGeneratingScript(false);
      // 提取错误信息
      let msg = '未知错误';
      if (typeof error === 'string') {
        msg = error;
      } else if (error instanceof Error) {
        msg = error.message;
      } else if (error && typeof error === 'object') {
        msg = (error as any).message || (error as any).error || String(error);
      }
      console.log('Setting error message:', msg);
      setErrorTitle('生成脚本失败');
      setErrorMessage(msg);
      setShowErrorModal(true);
      // 重置进度状态，但延迟一点让用户看到
      setTimeout(() => {
        setGenerateProgress(0);
        setGenerateTimeLeft('');
      }, 500);
    }
  };

  // 生成脚本 - 调用 splitParagraph
  const handleGenerateScript = async () => {
    if (!chapterId) return;

    if (paragraphs.length > 0) {
      setConfirmModal({
        isOpen: true,
        title: '重新生成脚本',
        message: '已存在段落，确定要重新生成吗？这将覆盖现有段落。',
        type: 'warning',
        onConfirm: () => {
          setConfirmModal(prev => ({ ...prev, isOpen: false }));
          doGenerateScript();
        },
      });
      return;
    }

    doGenerateScript();
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

  // 获取所有说话角色（已知角色 + 段落中出现的角色）
  const getAllSpeakers = (): string[] => {
    const speakers = new Set<string>();
    // 添加已知角色
    knownCharacters.forEach((c) => {
      if (c.name) speakers.add(c.name);
    });
    // 添加段落中已有的角色
    paragraphs.forEach((p) => {
      if (p.speaker) speakers.add(p.speaker);
    });
    return Array.from(speakers).sort();
  };

  // 获取过滤后的说话角色列表
  const getFilteredSpeakers = (): string[] => {
    const allSpeakers = getAllSpeakers();
    if (!speakerSearch.trim()) return allSpeakers;
    const searchLower = speakerSearch.toLowerCase();
    return allSpeakers.filter(s => s.toLowerCase().includes(searchLower));
  };

  const selectedParagraph = selectedParagraphId
    ? paragraphs.find((p) => p.id === selectedParagraphId)
    : null;

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
          {dirtyParagraphs.size > 0 && (
            <div className="dirty-indicator-wrapper">
              <div className="dirty-indicator">
                <AlertCircle size={14} />
                <span>{dirtyParagraphs.size} 个未保存修改</span>
              </div>
              <button
                className="undo-btn"
                onClick={handleUndoAll}
                disabled={isSaving}
              >
                <X size={14} />
                撤销
              </button>
            </div>
          )}
          {saveSuccess && (
            <div className="save-success">
              <Check size={14} />
              <span>已保存</span>
            </div>
          )}
        </div>
        <div className="header-right">
          <button
            className="btn-secondary"
            onClick={handleOpenTextEditor}
          >
            <FileText size={16} />
            编辑文本
          </button>
          <button
            className={`btn-save ${dirtyParagraphs.size > 0 ? 'dirty' : ''}`}
            onClick={handleSaveAll}
            disabled={dirtyParagraphs.size === 0 || isSaving}
          >
            <Save size={16} />
            {isSaving ? '保存中...' : '保存'}
          </button>
          <div className="generate-button-wrapper">
            <button
              className="btn-primary audio-generate-btn"
              onClick={handleGenerateChapterAudio}
              disabled={isGeneratingAudio || paragraphs.length === 0}
            >
              <Zap size={16} />
              {isGeneratingAudio ? '生成音频中...' : '生成章节音频'}
            </button>
            {isGeneratingAudio && (
              <div className="generate-progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${audioGenerateProgress}%` }}
                  ></div>
                </div>
                <div className="progress-info">
                  <span className="progress-percent">{Math.round(audioGenerateProgress)}%</span>
                </div>
              </div>
            )}
          </div>
          <div className="generate-button-wrapper">
            <button
              className="btn-primary"
              onClick={handleGenerateScript}
              disabled={isGeneratingScript}
            >
              <Sparkles size={16} />
              {isGeneratingScript ? '生成中...' : paragraphs.length > 0 ? '重新生成脚本' : '生成脚本'}
            </button>
            {isGeneratingScript && (
              <div className="generate-progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${generateProgress}%` }}
                  ></div>
                </div>
                <div className="progress-info">
                  <span className="progress-percent">{Math.round(generateProgress)}%</span>
                  <span className="progress-time">{generateTimeLeft}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 主编辑区域 - 上下布局 */}
      <div className="editor-main">
        {/* 上半部分 - 段落列表和详情 */}
        <div className="upper-section">
          {/* 左侧段落列表 */}
          <div className="paragraph-list-panel">
            <div className="panel-header">
              <h2>段落列表</h2>
              <span className="paragraph-count">{paragraphs.length} 个段落</span>
            </div>
            <div className="paragraph-list-content">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={paragraph.id}
                  className={`paragraph-item ${
                    selectedParagraphId === paragraph.id ? 'selected' : ''
                  }`}
                  onClick={() => handleSelectParagraph(paragraph.id)}
                >
                  <div className="paragraph-item-left">
                    <div className="paragraph-index">{index + 1}</div>
                    <div
                      className="speaker-dot"
                      style={{ backgroundColor: getSpeakerColor(paragraph.speaker) }}
                    ></div>
                  </div>
                  <div className="paragraph-item-content">
                    <div className="paragraph-item-header">
                      <span
                        className="speaker-label"
                        style={{ color: getSpeakerColor(paragraph.speaker) }}
                      >
                        {paragraph.speaker || '旁白'}
                      </span>
                      <span className="paragraph-duration">
                        <Clock size={10} />
                        {(paragraph.duration || 0).toFixed(1)}s
                      </span>
                      {isParagraphDirty(paragraph.id) && (
                        <span className="dirty-dot" title="有未保存的修改"></span>
                      )}
                    </div>
                    <p className="paragraph-item-text">
                      {paragraph.content}
                    </p>
                  </div>
                  <div className="paragraph-item-right">
                    {paragraph.audioPath ? (
                      <span className="has-audio-icon">
                        <Volume2 size={14} />
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧段落详情 */}
          <div className="paragraph-detail-panel">
            <div className="panel-header">
              <h2>段落详情</h2>
              {selectedParagraphId && isParagraphDirty(selectedParagraphId) && (
                <span className="dirty-badge">
                  <AlertCircle size={12} />
                  未保存
                </span>
              )}
            </div>
            {selectedParagraph ? (
              <div className="panel-content">
                <div className="form-group">
                  <label>文本内容</label>
                  <textarea
                    value={editForm.content}
                    onChange={(e) =>
                      handleFormChange('content', e.target.value)}
                    rows={5}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label>说话角色</label>
                    <div className="speaker-select-wrapper" ref={speakerDropdownRef}>
                      <div
                        className="speaker-select-input"
                        onClick={() => {
                          setShowSpeakerDropdown(!showSpeakerDropdown);
                          setSpeakerSearch('');
                        }}
                      >
                        <span className={editForm.speaker ? '' : 'placeholder'}>
                          {editForm.speaker || '旁白'}
                        </span>
                        <span className="dropdown-arrow">▼</span>
                      </div>
                      {showSpeakerDropdown && (
                        <div className="speaker-dropdown">
                          <input
                            type="text"
                            className="speaker-search-input"
                            placeholder="搜索角色..."
                            value={speakerSearch}
                            onChange={(e) => setSpeakerSearch(e.target.value)}
                            autoFocus
                          />
                          <div className="speaker-options">
                            <div
                              className={`speaker-option ${!editForm.speaker ? '' : 'selected'}`}
                              onClick={() => {
                                handleFormChange('speaker', '');
                                setShowSpeakerDropdown(false);
                              }}
                            >
                              旁白
                            </div>
                            {getFilteredSpeakers().map((speaker) => (
                              <div
                                key={speaker}
                                className={`speaker-option ${editForm.speaker === speaker ? 'selected' : ''}`}
                                onClick={() => {
                                  handleFormChange('speaker', speaker);
                                  setShowSpeakerDropdown(false);
                                }}
                              >
                                {speaker}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>情感</label>
                    <select
                      value={editForm.tone}
                      onChange={(e) =>
                        handleFormChange('tone', e.target.value)}
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
                        handleFormChange('speed', parseFloat(e.target.value))}
                    />
                    <div className="range-labels">
                      <span>0.5x</span>
                      <span>1.0x</span>
                      <span>2.0x</span>
                    </div>
                  </div>
                </div>

                <div className="action-buttons">
                  <button
                    className="btn-generate"
                    onClick={() => handleGenerateAudio(selectedParagraph.id)}
                  >
                    <Zap size={16} />
                    生成音频
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDeleteParagraph(selectedParagraph.id)}
                  >
                    <Trash2 size={16} />
                    删除
                  </button>
                </div>
              </div>
            ) : (
              <div className="empty-properties">
                <Settings size={40} />
                <p>选择一个段落来编辑属性</p>
              </div>
            )}
          </div>
        </div>

        {/* 下半部分 - 音轨/时间轴 */}
        <div className="lower-section">
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
                    } ${isParagraphDirty(segment.id) ? 'dirty' : ''}`}
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
                    {isParagraphDirty(segment.id) && (
                      <div className="clip-dirty-indicator">
                        <AlertCircle size={10} />
                      </div>
                    )}
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
        </div>
      </div>

      {/* 章节文本编辑器模态框 */}
      {showTextEditor && (
        <div className="text-editor-modal">
          <div className="text-editor-content">
            <div className="text-editor-header">
              <div className="text-editor-title">
                <FileText size={20} />
                <h2>编辑章节文本</h2>
              </div>
              <button
                className="modal-close"
                onClick={() => setShowTextEditor(false)}
                disabled={isSavingChapter}
              >
                <X size={24} />
              </button>
            </div>
            <div className="text-editor-body">
              <textarea
                value={chapterText}
                onChange={(e) => setChapterText(e.target.value)}
                placeholder="请输入章节内容..."
                className="chapter-textarea"
              />
            </div>
            <div className="text-editor-footer">
              <button
                className="btn-secondary"
                onClick={() => {
                  setShowTextEditor(false);
                  if (chapter) {
                    setChapterText(chapter.content || '');
                  }
                }}
                disabled={isSavingChapter}
              >
                取消
              </button>
              <button
                className="btn-primary"
                onClick={handleSaveChapterText}
                disabled={isSavingChapter}
              >
                <Save size={16} />
                {isSavingChapter ? '保存中...' : '保存'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 确认弹窗 */}
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        type={confirmModal.type}
        onConfirm={() => {
          if (confirmModal.onConfirm) {
            confirmModal.onConfirm();
          }
        }}
        onCancel={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
      />

      {/* 错误提示模态框 */}
      {showErrorModal && (
        <div className="error-modal">
          <div className="error-modal-content">
            <div className="error-modal-header">
              <div className="error-modal-title">
                <AlertCircle size={24} className="error-icon" />
                <h2>{errorTitle}</h2>
              </div>
              <button
                className="modal-close"
                onClick={() => setShowErrorModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="error-modal-body">
              <p className="error-message-text">{errorMessage}</p>
              {errorMessage?.includes('API Key') && (
                <div className="error-hint-box">
                  <Settings size={16} />
                  <span>请前往项目详情页配置 API Key</span>
                </div>
              )}
            </div>
            <div className="error-modal-footer">
              <button
                className="btn-primary"
                onClick={() => setShowErrorModal(false)}
              >
                知道了
              </button>
              {errorMessage?.includes('API Key') && projectId && (
                <Link
                  to={`/project/${projectId}`}
                  className="btn-secondary"
                  onClick={() => setShowErrorModal(false)}
                >
                  前往配置
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .chapter-editor {
          background-color: #0F1419;
          color: #ECF0F1;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* 顶部导航栏 */
        .editor-header {
          flex-shrink: 0;
          width: 100%;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          max-width: none;
          margin: 0;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          flex-shrink: 0;
        }

        .editor-header .chapter-title {
          min-width: 0;
        }

        .editor-header .chapter-title h1 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 600;
          color: #F1F5F9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .editor-header .subtitle {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        .dirty-indicator-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .dirty-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(251, 191, 36, 0.15);
          color: #FBBF24;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .undo-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: rgba(148, 163, 184, 0.15);
          color: #94A3B8;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(148, 163, 184, 0.2);
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .undo-btn:hover:not(:disabled) {
          background: rgba(148, 163, 184, 0.25);
          border-color: rgba(148, 163, 184, 0.4);
          color: #E2E8F0;
        }

        .undo-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .save-success {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(16, 185, 129, 0.15);
          color: #10B981;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .editor-header .header-right {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
          align-items: flex-start;
        }

        .generate-button-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .generate-progress-container {
          width: 240px;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background-color: #2A3442;
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #00A8FF 0%, #00CC88 100%);
          border-radius: 3px;
          transition: width 0.3s ease;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;
        }

        .progress-percent {
          font-size: 0.75rem;
          color: #00A8FF;
          font-weight: 600;
        }

        .progress-time {
          font-size: 0.75rem;
          color: #64748B;
        }

        .btn-save {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          white-space: nowrap;
          background: #2A3442;
          color: #94A3B8;
          border: 1px solid #3A4A5C;
        }

        .btn-save:hover:not(:disabled) {
          background: #3A4A5C;
          border-color: #4A5A6C;
        }

        .btn-save.dirty {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          color: white;
          border: none;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
        }

        .btn-save.dirty:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);
        }

        .btn-save:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* 主编辑区域 - 上下布局 */
        .editor-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* 上半部分 */
        .upper-section {
          flex: 1;
          display: flex;
          min-height: 0;
          border-bottom: 1px solid #2A3442;
          width: 100%;
        }

        /* 下半部分 */
        .lower-section {
          height: 260px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* 面板通用 */
        .panel-header {
          padding: 12px 16px;
          background: linear-gradient(135deg, #1A1F26 0%, #141920 100%);
          border-bottom: 1px solid #2A3442;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
        }

        .panel-header h2 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: #CBD5E1;
        }

        .dirty-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: rgba(251, 191, 36, 0.15);
          color: #FBBF24;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* 左侧段落列表面板 */
        .paragraph-list-panel {
          width: 40%;
          min-width: 320px;
          background-color: #141920;
          border-right: 1px solid #2A3442;
          display: flex;
          flex-direction: column;
        }

        .paragraph-count {
          font-size: 0.8rem;
          color: #64748B;
        }

        .paragraph-list-content {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }

        .paragraph-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: linear-gradient(145deg, #1E2530 0%, #1A212B 100%);
          border: 1px solid #2A3442;
          border-radius: 10px;
          padding: 10px 12px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .paragraph-item:hover {
          border-color: #3A4A5C;
          transform: translateY(-1px);
        }

        .paragraph-item.selected {
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
          background: linear-gradient(145deg, #1A2733 0%, #16222C 100%);
        }

        .paragraph-item-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          padding-top: 2px;
        }

        .paragraph-index {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2A3442;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #94A3B8;
        }

        .speaker-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .paragraph-item-content {
          flex: 1;
          min-width: 0;
        }

        .paragraph-item-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }

        .speaker-label {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .paragraph-duration {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.75rem;
          color: #64748B;
        }

        .dirty-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FBBF24;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .paragraph-item-text {
          margin: 0;
          color: #E2E8F0;
          font-size: 0.88rem;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .paragraph-item-right {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .has-audio-icon {
          color: #4ECDC4;
          display: flex;
          align-items: center;
        }

        /* 右侧段落详情面板 */
        .paragraph-detail-panel {
          flex: 1;
          background-color: #141920;
          display: flex;
          flex-direction: column;
        }

        .panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .form-row {
          display: flex;
          gap: 16px;
        }

        .form-row .form-group {
          flex: 1;
        }

        .form-group.full-width {
          flex: 1 1 100%;
        }

        /* 说话角色搜索选择器 */
        .speaker-select-wrapper {
          position: relative;
        }

        .speaker-select-input {
          width: 100%;
          padding: 10px 12px;
          background-color: #0F1419;
          border: 1px solid #2A3442;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.88rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
        }

        .speaker-select-input:hover {
          border-color: #3A4A5C;
        }

        .speaker-select-input .placeholder {
          color: #64748B;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          color: #64748B;
        }

        .speaker-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          margin-top: 4px;
          background: #1A2432;
          border: 1px solid #2D3E54;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          z-index: 100;
          overflow: hidden;
        }

        .speaker-search-input {
          width: 100%;
          padding: 10px 12px;
          background-color: #0F1419;
          border: none;
          border-bottom: 1px solid #2D3E54;
          color: #E2E8F0;
          font-size: 0.88rem;
          outline: none;
        }

        .speaker-search-input::placeholder {
          color: #64748B;
        }

        .speaker-options {
          max-height: 240px;
          overflow-y: auto;
        }

        .speaker-option {
          padding: 10px 12px;
          color: #E2E8F0;
          font-size: 0.88rem;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .speaker-option:hover {
          background: rgba(0, 168, 255, 0.1);
        }

        .speaker-option.selected {
          background: rgba(0, 168, 255, 0.2);
          color: #00A8FF;
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
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.82rem;
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
          font-size: 0.88rem;
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
          min-height: 100px;
          resize: vertical;
          font-family: inherit;
        }

        .label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .value-badge {
          padding: 2px 8px;
          background-color: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
          border-radius: 4px;
          font-size: 0.78rem;
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
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border-radius: 50%;
          cursor: pointer;
          margin-top: -5px;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.3);
        }

        .range-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #64748B;
          margin-top: 4px;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
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
          font-size: 0.88rem;
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
          font-size: 0.88rem;
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

        /* 时间轴面板 */
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
          width: 36px;
          height: 36px;
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
          font-size: 0.88rem;
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
          padding: 16px 20px;
        }

        .timeline-ruler {
          position: relative;
          height: 24px;
          margin-bottom: 6px;
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
          font-size: 0.7rem;
          color: #64748B;
        }

        .timeline-track {
          position: relative;
          height: 160px;
          background: linear-gradient(180deg, #141920 0%, #11161C 100%);
          border-radius: 10px;
          border: 1px solid #2A3442;
          overflow: hidden;
        }

        .timeline-clip {
          position: absolute;
          top: 16px;
          height: calc(100% - 32px);
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

        .timeline-clip.dirty {
          box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.6), 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .clip-content {
          overflow: hidden;
        }

        .clip-speaker {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.73rem;
          font-weight: 600;
          color: white;
          margin-bottom: 3px;
        }

        .clip-text {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.95);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .clip-dirty-indicator {
          position: absolute;
          top: 5px;
          right: 6px;
          color: #FBBF24;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .clip-indicator {
          position: absolute;
          top: 5px;
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

        /* 按钮样式 */
        .btn-primary,
        .btn-secondary {
          padding: 9px 16px;
          border: none;
          border-radius: 8px;
          font-size: 0.88rem;
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

        .btn-primary.audio-generate-btn {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.25);
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

        /* 文本编辑器模态框 */
        .text-editor-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(6px);
          padding: 20px;
          box-sizing: border-box;
        }

        .text-editor-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #151E2B 100%);
          border-radius: 14px;
          width: 100%;
          max-width: 1200px;
          height: 100%;
          max-height: 900px;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
        }

        .text-editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        .text-editor-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #E2E8F0;
        }

        .text-editor-title h2 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .modal-close {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }

        .modal-close:hover {
          background-color: #334155;
          color: #E2E8F0;
        }

        .text-editor-body {
          flex: 1;
          padding: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .chapter-textarea {
          width: 100%;
          flex: 1;
          padding: 16px;
          background-color: #0F1419;
          border: 1px solid #2A3442;
          border-radius: 10px;
          color: #E2E8F0;
          font-size: 0.95rem;
          line-height: 1.7;
          font-family: inherit;
          resize: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .chapter-textarea:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .text-editor-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 14px 20px;
          border-top: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        /* 加载和错误状态 */
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: #CBD5E1;
        }

        .error-container h2 {
          margin: 0 0 20px;
        }

        /* 错误提示模态框 */
        .error-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(6px);
          padding: 20px;
          box-sizing: border-box;
        }

        .error-modal-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #151E2B 100%);
          border-radius: 16px;
          width: 100%;
          max-width: 480px;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .error-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #2D3E54;
          flex-shrink: 0;
        }

        .error-modal-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #E2E8F0;
        }

        .error-modal-title h2 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .error-icon {
          color: #EF4444;
          flex-shrink: 0;
        }

        .error-modal-body {
          padding: 24px;
        }

        .error-message-text {
          margin: 0 0 16px 0;
          color: #E2E8F0;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .error-hint-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: rgba(0, 168, 255, 0.1);
          border: 1px solid rgba(0, 168, 255, 0.2);
          border-radius: 10px;
          color: #94A3B8;
          font-size: 0.85rem;
        }

        .error-hint-box svg {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .error-modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 16px 24px 24px;
          border-top: 1px solid #2D3E54;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default ChapterEditor;
