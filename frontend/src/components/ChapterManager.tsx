import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit2, Trash2, GripVertical, FileText, List, X, ExternalLink } from 'lucide-react';
import api from '../utils/api';
import { Chapter } from '../types';

interface ChapterManagerProps {
  projectId: number;
  onChapterSelect?: (chapter: Chapter) => void;
}

const ChapterManager: React.FC<ChapterManagerProps> = ({
  projectId,
  onChapterSelect,
}) => {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newChapter, setNewChapter] = useState({ title: '', content: '' });

  // 加载章节列表
  const loadChapters = async () => {
    setIsLoading(true);
    try {
      const data = await api.getChapters(projectId);
      setChapters(data);
    } catch (error) {
      console.error('Failed to load chapters:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadChapters();
  }, [projectId]);

  // 创建章节
  const handleCreateChapter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChapter.title.trim()) return;

    setIsLoading(true);
    try {
      await api.createChapter(projectId, newChapter.title, newChapter.content);
      setNewChapter({ title: '', content: '' });
      setShowCreateModal(false);
      loadChapters();
    } catch (error) {
      console.error('Failed to create chapter:', error);
    }
    setIsLoading(false);
  };

  // 删除章节
  const handleDeleteChapter = async (id: number) => {
    if (!window.confirm('确定要删除此章节吗？')) return;

    setIsLoading(true);
    try {
      await api.deleteChapter(id);
      loadChapters();
    } catch (error) {
      console.error('Failed to delete chapter:', error);
    }
    setIsLoading(false);
  };

  // 排序拖拽功能（简单实现）
  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData('text/plain', index.toString());
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('text/plain'));

    if (sourceIndex !== targetIndex) {
      const newChapters = [...chapters];
      const [movedChapter] = newChapters.splice(sourceIndex, 1);
      newChapters.splice(targetIndex, 0, movedChapter);

      // 更新顺序
      const chapterIds = newChapters.map(ch => ch.id);
      try {
        await api.reorderChapters(projectId, chapterIds);
        setChapters(newChapters);
      } catch (error) {
        console.error('Failed to reorder chapters:', error);
      }
    }
  };

  return (
    <div className="chapter-manager">
      <div className="chapter-manager-header">
        <div className="header-left">
          <FileText size={20} />
          <h2>章节管理</h2>
        </div>
        <button
          className="btn-primary"
          onClick={() => setShowCreateModal(true)}
          disabled={isLoading}
        >
          <Plus size={16} />
          新建章节
        </button>
      </div>

      <div className="chapter-list">
        {isLoading && chapters.length === 0 ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>加载中...</p>
          </div>
        ) : chapters.length === 0 ? (
          <div className="empty-state">
            <List size={48} />
            <h3>暂无章节</h3>
            <p>点击上方按钮创建您的第一个章节</p>
          </div>
        ) : (
          chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              className="chapter-item"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              <div className="chapter-info" onClick={() => navigate(`/project/${projectId}/chapter/${chapter.id}`)}>
                <div className="chapter-index">{index + 1}</div>
                <div className="chapter-content">
                  <h4>{chapter.title}</h4>
                  <p className="chapter-preview">{chapter.content.slice(0, 50)}{chapter.content.length > 50 ? '...' : ''}</p>
                  <div className="chapter-meta">
                    <span>创建时间: {new Date(chapter.createdAt).toLocaleDateString()}</span>
                    <span>更新时间: {new Date(chapter.updatedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="chapter-actions">
                <GripVertical size={20} className="drag-handle" />
                <button
                  className="btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/project/${projectId}/chapter/${chapter.id}`);
                  }}
                  disabled={isLoading}
                  title="打开章节编辑器"
                >
                  <ExternalLink size={16} />
                  打开
                </button>
                <button
                  className="btn-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteChapter(chapter.id);
                  }}
                  disabled={isLoading}
                >
                  <Trash2 size={16} />
                  删除
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 创建章节模态框 */}
      {showCreateModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>创建新章节</h2>
              <button
                className="modal-close"
                onClick={() => setShowCreateModal(false)}
                disabled={isLoading}
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleCreateChapter}>
              <div className="form-group">
                <label htmlFor="chapter-title">章节标题</label>
                <input
                  type="text"
                  id="chapter-title"
                  value={newChapter.title}
                  onChange={(e) =>
                    setNewChapter({ ...newChapter, title: e.target.value })
                  }
                  placeholder="请输入章节标题"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="chapter-content">章节内容</label>
                <textarea
                  id="chapter-content"
                  value={newChapter.content}
                  onChange={(e) =>
                    setNewChapter({ ...newChapter, content: e.target.value })
                  }
                  placeholder="请输入章节内容"
                  rows={6}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowCreateModal(false)}
                  disabled={isLoading}
                >
                  取消
                </button>
                <button type="submit" className="btn-primary" disabled={isLoading}>
                  确定
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .chapter-manager {
          background-color: transparent;
          border-radius: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .chapter-manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #CBD5E1;
        }

        .header-left h2 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
        }

        .chapter-list {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background-color: #151E2B;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px;
          color: #64748B;
        }

        .spinner {
          width: 28px;
          height: 28px;
          border: 3px solid #334155;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 12px;
        }

        .empty-state {
          text-align: center;
          padding: 48px;
          color: #64748B;
        }

        .empty-state h3 {
          margin: 16px 0 8px;
          color: #E2E8F0;
          font-size: 1.05rem;
        }

        .chapter-item {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border-radius: 10px;
          padding: 16px 18px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid #2D3E54;
        }

        .chapter-item:hover {
          background: linear-gradient(145deg, #253345 0%, #1E2A3A 100%);
          border-color: #00A8FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .chapter-item.dragging {
          opacity: 0.5;
        }

        .chapter-info {
          flex: 1;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .chapter-index {
          min-width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.85rem;
          box-shadow: 0 2px 8px rgba(0, 168, 255, 0.25);
        }

        .chapter-content {
          flex: 1;
          min-width: 0;
        }

        .chapter-content h4 {
          margin: 0 0 6px 0;
          color: #F1F5F9;
          font-size: 1rem;
          font-weight: 600;
        }

        .chapter-preview {
          margin: 0 0 8px 0;
          color: #94A3B8;
          font-size: 0.88rem;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .chapter-meta {
          display: flex;
          gap: 16px;
          font-size: 0.78rem;
          color: #64748B;
        }

        .chapter-actions {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .drag-handle {
          color: #475569;
          cursor: grab;
          padding: 4px;
          transition: color 0.2s;
        }

        .drag-handle:hover {
          color: #94A3B8;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border-radius: 14px;
          width: 90%;
          max-width: 520px;
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid #2D3E54;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          border-bottom: 1px solid #2D3E54;
        }

        .modal-header h2 {
          margin: 0;
          color: #E2E8F0;
          font-size: 1.2rem;
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
        }

        .modal-close:hover {
          background-color: #334155;
          color: #E2E8F0;
        }

        .modal-content form {
          padding: 22px;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #94A3B8;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 11px 14px;
          background-color: #151E2B;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #E2E8F0;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .form-group textarea {
          min-height: 140px;
          resize: vertical;
          font-family: inherit;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 16px 22px;
          border-top: 1px solid #2D3E54;
        }

        .btn-primary,
        .btn-secondary,
        .btn-danger {
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
          background: #334155;
          color: #E2E8F0;
          border: 1px solid #475569;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #475569;
          border-color: #64748B;
        }

        .btn-danger {
          background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
          color: white;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.25);
        }

        .btn-danger:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
        }

        .btn-primary:disabled,
        .btn-secondary:disabled,
        .btn-danger:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ChapterManager;
