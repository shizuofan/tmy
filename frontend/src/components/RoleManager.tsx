import React, { useState, useEffect } from 'react';
import {
  Plus,
  Edit2,
  Trash2,
  User,
  Mic,
  X,
  Save,
  Volume2,
  Sparkles,
  Info,
} from 'lucide-react';
import api from '../utils/api';
import { Character, Voice } from '../types';

interface RoleManagerProps {
  projectId: number;
}

const RoleManager: React.FC<RoleManagerProps> = ({ projectId }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCharacter, setEditingCharacter] = useState<Character | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    voiceId: '',
  });

  // 加载角色和音色列表
  useEffect(() => {
    if (projectId) {
      loadCharacters();
      loadVoices();
    }
  }, [projectId]);

  const loadCharacters = async () => {
    setIsLoading(true);
    try {
      const data = await api.getCharacters(projectId);
      setCharacters(data);
    } catch (error) {
      console.error('Failed to load characters:', error);
    }
    setIsLoading(false);
  };

  const loadVoices = async () => {
    try {
      const data = await api.getVoices();
      setVoices(data);
    } catch (error) {
      console.error('Failed to load voices:', error);
    }
  };

  const handleCreateCharacter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setIsLoading(true);
    try {
      await api.createCharacter(
        projectId,
        formData.name,
        formData.description,
        formData.voiceId
      );
      resetForm();
      setShowCreateModal(false);
      loadCharacters();
    } catch (error) {
      console.error('Failed to create character:', error);
    }
    setIsLoading(false);
  };

  const handleUpdateCharacter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCharacter || !formData.name.trim()) return;

    setIsLoading(true);
    try {
      await api.updateCharacter(
        editingCharacter.id,
        formData.name,
        formData.description,
        formData.voiceId
      );
      resetForm();
      setEditingCharacter(null);
      loadCharacters();
    } catch (error) {
      console.error('Failed to update character:', error);
    }
    setIsLoading(false);
  };

  const handleDeleteCharacter = async (id: number) => {
    if (!window.confirm('确定要删除此角色吗？')) return;

    setIsLoading(true);
    try {
      await api.deleteCharacter(id);
      loadCharacters();
    } catch (error) {
      console.error('Failed to delete character:', error);
    }
    setIsLoading(false);
  };

  const handleEditCharacter = (character: Character) => {
    setEditingCharacter(character);
    setFormData({
      name: character.name,
      description: character.description || '',
      voiceId: character.voiceId || '',
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      voiceId: '',
    });
  };

  const getVoiceName = (voiceId: string) => {
    const voice = voices.find((v) => v.id === voiceId);
    return voice ? voice.name : '未设置音色';
  };

  return (
    <div className="role-manager">
      <div className="role-manager-header">
        <div className="header-left">
          <User size={20} />
          <h2>角色管理</h2>
        </div>
        <button
          className="btn-primary"
          onClick={() => {
            resetForm();
            setEditingCharacter(null);
            setShowCreateModal(true);
          }}
          disabled={isLoading}
        >
          <Plus size={16} />
          添加角色
        </button>
      </div>

      <div className="role-list">
        {isLoading && characters.length === 0 ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>加载中...</p>
          </div>
        ) : characters.length === 0 ? (
          <div className="empty-state">
            <Sparkles size={48} />
            <h3>暂无角色</h3>
            <p>点击上方按钮添加小说角色</p>
          </div>
        ) : (
          <div className="role-grid">
            {characters.map((character) => (
              <div key={character.id} className="role-card">
                <div className="role-avatar">
                  <User size={28} />
                </div>
                <div className="role-info">
                  <h4>{character.name}</h4>
                  {character.description && (
                    <p className="role-description">{character.description}</p>
                  )}
                  <div className="voice-badge">
                    <Mic size={14} />
                    <span>{getVoiceName(character.voiceId)}</span>
                  </div>
                </div>
                <div className="role-actions">
                  <button
                    className="btn-icon"
                    onClick={() => handleEditCharacter(character)}
                    disabled={isLoading}
                    title="编辑"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    className="btn-icon btn-danger"
                    onClick={() => handleDeleteCharacter(character.id)}
                    disabled={isLoading}
                    title="删除"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 创建/编辑角色模态框 */}
      {(showCreateModal || editingCharacter) && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingCharacter ? '编辑角色' : '添加新角色'}</h2>
              <button
                className="modal-close"
                onClick={() => {
                  setShowCreateModal(false);
                  setEditingCharacter(null);
                  resetForm();
                }}
                disabled={isLoading}
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={editingCharacter ? handleUpdateCharacter : handleCreateCharacter}>
              <div className="form-group">
                <label htmlFor="character-name">角色名称 *</label>
                <input
                  id="character-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="请输入角色名称"
                  required
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="character-description">角色简介</label>
                <textarea
                  id="character-description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="请输入角色简介（可选）"
                  rows={3}
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="character-voice">选择音色</label>
                <div className="voice-selector">
                  {voices.length === 0 ? (
                    <div className="no-voices">
                      <Info size={16} />
                      <span>加载音色中...</span>
                    </div>
                  ) : (
                    <div className="voice-grid">
                      {voices.map((voice) => (
                        <div
                          key={voice.id}
                          className={`voice-option ${
                            formData.voiceId === voice.id ? 'selected' : ''
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, voiceId: voice.id })
                          }
                        >
                          <div className="voice-option-header">
                            <Volume2 size={16} />
                            <span className="voice-name">{voice.name}</span>
                          </div>
                          <p className="voice-desc">{voice.description}</p>
                          {voice.supportedTones && voice.supportedTones.length > 0 && (
                            <div className="voice-tones">
                              {voice.supportedTones.slice(0, 3).map((tone, i) => (
                                <span key={i} className="tone-tag">
                                  {tone}
                                </span>
                              ))}
                              {voice.supportedTones.length > 3 && (
                                <span className="tone-tag">+{voice.supportedTones.length - 3}</span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingCharacter(null);
                    resetForm();
                  }}
                  disabled={isLoading}
                >
                  取消
                </button>
                <button type="submit" className="btn-primary" disabled={isLoading}>
                  <Save size={16} />
                  {editingCharacter ? '保存修改' : '创建角色'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .role-manager {
          background-color: transparent;
          border-radius: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .role-manager-header {
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

        .role-list {
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

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
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

        .role-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 12px;
        }

        .role-card {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border: 1px solid #2D3E54;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          gap: 14px;
          transition: all 0.2s ease;
        }

        .role-card:hover {
          background: linear-gradient(145deg, #253345 0%, #1E2A3A 100%);
          border-color: #00A8FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .role-avatar {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.25);
        }

        .role-info {
          flex: 1;
          min-width: 0;
        }

        .role-info h4 {
          margin: 0 0 6px;
          color: #F1F5F9;
          font-size: 1rem;
          font-weight: 600;
        }

        .role-description {
          margin: 0 0 8px;
          color: #94A3B8;
          font-size: 0.85rem;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .voice-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background-color: rgba(0, 168, 255, 0.12);
          color: #00A8FF;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .role-actions {
          display: flex;
          gap: 4px;
          flex-direction: column;
        }

        .btn-icon {
          width: 32px;
          height: 32px;
          padding: 0;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: #64748B;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-icon:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.08);
          color: #E2E8F0;
        }

        .btn-icon.btn-danger:hover:not(:disabled) {
          background: rgba(239, 68, 68, 0.15);
          color: #EF4444;
        }

        .btn-icon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* 模态框样式 */
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
          max-width: 560px;
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
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .form-group textarea {
          min-height: 80px;
          resize: vertical;
          font-family: inherit;
        }

        /* 音色选择器 */
        .voice-selector {
          margin-top: 4px;
        }

        .no-voices {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background-color: #151E2B;
          border: 1px solid #334155;
          border-radius: 8px;
          color: #64748B;
        }

        .voice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 10px;
        }

        .voice-option {
          padding: 14px;
          background-color: #151E2B;
          border: 2px solid #334155;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .voice-option:hover {
          border-color: #475569;
          background-color: #1A2533;
        }

        .voice-option.selected {
          border-color: #00A8FF;
          background-color: rgba(0, 168, 255, 0.08);
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.15);
        }

        .voice-option-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .voice-option-header svg {
          color: #00A8FF;
        }

        .voice-name {
          color: #E2E8F0;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .voice-desc {
          margin: 0;
          color: #64748B;
          font-size: 0.82rem;
          line-height: 1.4;
        }

        .voice-tones {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 8px;
        }

        .tone-tag {
          padding: 2px 8px;
          background-color: rgba(148, 163, 184, 0.15);
          color: #94A3B8;
          border-radius: 4px;
          font-size: 0.72rem;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 6px;
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
          background: #334155;
          color: #E2E8F0;
          border: 1px solid #475569;
        }

        .btn-secondary:hover:not(:disabled) {
          background: #475569;
          border-color: #64748B;
        }

        .btn-primary:disabled,
        .btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
};

export default RoleManager;
