import React, { useState, useEffect } from 'react';
import {
  Trash2,
  Bot,
  Sparkles,
} from 'lucide-react';
import api from '../utils/api';
import { CharacterInfo } from '../types';

interface RoleManagerProps {
  projectId: number;
}

const RoleManager: React.FC<RoleManagerProps> = ({ projectId }) => {
  const [knownCharacters, setKnownCharacters] = useState<CharacterInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 加载已知角色列表
  useEffect(() => {
    if (projectId) {
      loadKnownCharacters();
    }
  }, [projectId]);

  const loadKnownCharacters = async () => {
    setIsLoading(true);
    try {
      const data = await api.getProjectKnownCharacters(projectId);
      setKnownCharacters(data);
    } catch (error) {
      console.error('Failed to load known characters:', error);
    }
    setIsLoading(false);
  };

  const handleDeleteKnownCharacter = async (characterName: string) => {
    if (!window.confirm(`确定要删除角色 "${characterName}" 吗？`)) return;

    setIsLoading(true);
    try {
      await api.deleteProjectKnownCharacter(projectId, characterName);
      loadKnownCharacters();
    } catch (error) {
      console.error('Failed to delete known character:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="role-manager">
      <div className="role-manager-header">
        <div className="header-left">
          <Bot size={20} />
          <h2>已知角色</h2>
          {knownCharacters.length > 0 && (
            <span className="count-badge">{knownCharacters.length}</span>
          )}
        </div>
      </div>

      <div className="role-list">
        {isLoading && knownCharacters.length === 0 ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>加载中...</p>
          </div>
        ) : knownCharacters.length === 0 ? (
          <div className="empty-state">
            <Bot size={48} />
            <h3>暂未知角色</h3>
            <p>使用 LLM 解析文本后，识别到的角色会显示在这里</p>
          </div>
        ) : (
          <div className="role-grid">
            {knownCharacters.map((character, index) => (
              <div key={`${character.name}-${index}`} className="role-card known-character-card">
                <div className="role-avatar known-avatar">
                  <Bot size={28} />
                </div>
                <div className="role-info">
                  <h4>{character.name}</h4>
                  {character.description && (
                    <p className="role-description">{character.description}</p>
                  )}
                  <div className="known-badge">
                    <Sparkles size={12} />
                    <span>AI 识别</span>
                  </div>
                </div>
                <div className="role-actions">
                  <button
                    className="btn-icon btn-danger"
                    onClick={() => handleDeleteKnownCharacter(character.name)}
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

        .count-badge {
          margin-left: 8px;
          padding: 2px 10px;
          background: #10B981;
          color: white;
          border-radius: 12px;
          font-size: 0.8rem;
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
          border-top: 3px solid #10B981;
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
          background: linear-gradient(145deg, #1A2A35 0%, #16232D 100%);
          border: 1px solid #2D4A3E;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          gap: 14px;
          transition: all 0.2s ease;
        }

        .role-card:hover {
          background: linear-gradient(145deg, #1E303A 0%, #1A2832 100%);
          border-color: #10B981;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.15);
        }

        .role-avatar {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }

        .role-avatar.known-avatar {
          background: linear-gradient(135deg, #10B981 0%, #059669 100%);
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

        .known-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background-color: rgba(16, 185, 129, 0.12);
          color: #10B981;
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
      `}</style>
    </div>
  );
};

export default RoleManager;
