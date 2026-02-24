import React, { useState, useEffect, useMemo } from 'react';
import {
  Trash2,
  Edit2,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import api from '../utils/api';
import { Character, Voice, GenderNameMap, AgeNameMap, GenderMale, GenderFemale, GenderUnknown, AgeChild, AgeTeen, AgeAdult, AgeSenior, AgeUnknown } from '../types';

// 音色分类显示名称映射
const CategoryNameMap: Record<string, string> = {
  'general': '通用场景',
  'audiobook': '有声阅读',
  'video': '视频配音',
  'roleplay': '角色扮演',
  'customer_service': '客服场景',
  'multilingual': '多语种',
};

// 性别显示名称映射（用于音色）
const VoiceGenderNameMap: Record<string, string> = {
  'male': '男',
  'female': '女',
};

interface RoleManagerProps {
  projectId: number;
}

// 每页显示数量
const PAGE_SIZE = 12;

const RoleManager: React.FC<RoleManagerProps> = ({ projectId }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [voices, setVoices] = useState<Voice[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingCharacterId, setEditingCharacterId] = useState<number | null>(null);
  const [editingAliases, setEditingAliases] = useState<string>('');
  const [editingGender, setEditingGender] = useState<string>('');
  const [editingAge, setEditingAge] = useState<string>('');
  const [editingDescription, setEditingDescription] = useState<string>('');

  // 按分类分组的音色列表
  const groupedVoices = useMemo(() => {
    const groups: Record<string, Voice[]> = {};
    voices.forEach(voice => {
      const category = voice.category || 'other';
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(voice);
    });
    return groups;
  }, [voices]);

  // 加载角色列表和音色列表
  useEffect(() => {
    if (projectId) {
      loadData();
    }
  }, [projectId]);

  // 搜索时重置页码
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [charData, voiceData] = await Promise.all([
        api.getCharacters(projectId),
        api.getVoices(),
      ]);
      setCharacters(charData);
      setVoices(voiceData);
    } catch (error) {
      console.error('Failed to load data:', error);
    }
    setIsLoading(false);
  };

  // 过滤和排序后的角色列表
  const filteredCharacters = useMemo(() => {
    let filtered = characters;

    // 搜索过滤
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((c) => {
        // 匹配姓名
        if (c.name.toLowerCase().includes(query)) return true;
        // 匹配别名
        if (c.aliases && c.aliases.some((a) => a.toLowerCase().includes(query))) return true;
        // 匹配简介
        if (c.description && c.description.toLowerCase().includes(query)) return true;
        return false;
      });
    }

    // 按最后更新时间逆序排列（lastSeenAt 从大到小）
    filtered.sort((a, b) => {
      const aTime = (a as any).lastSeenAt || 0;
      const bTime = (b as any).lastSeenAt || 0;
      return bTime - aTime;
    });

    return filtered;
  }, [characters, searchQuery]);

  // 分页数据
  const totalPages = Math.ceil(filteredCharacters.length / PAGE_SIZE);
  const paginatedCharacters = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredCharacters.slice(start, end);
  }, [filteredCharacters, currentPage]);

  const handleDeleteCharacter = async (characterId: number) => {
    // 旁白角色不能删除
    if (characterId === 0) return;

    setIsLoading(true);
    try {
      if (characterId < 0) {
        // knownCharacters中的角色
        const char = characters.find((c) => c.id === characterId);
        if (char) {
          await api.deleteProjectKnownCharacter(projectId, char.name);
        }
      } else {
        // 数据库中的角色
        await api.deleteCharacter(characterId);
      }
      loadData();
    } catch (error) {
      console.error('Failed to delete character:', error);
    }
    setIsLoading(false);
  };

  const handleVoiceChange = async (characterId: number, voiceId: string) => {
    try {
      // 更新本地状态
      setCharacters((prev) =>
        prev.map((c) => (c.id === characterId ? { ...c, voiceId } : c))
      );

      // 保存到后端
      if (characterId === 0) {
        // 旁白角色特殊处理
        await api.updateNarratorVoice(projectId, voiceId);
      } else if (characterId < 0) {
        // knownCharacters中的角色
        const char = characters.find((c) => c.id === characterId);
        if (char) {
          await api.setKnownCharacterVoice(projectId, char.name, voiceId);
        }
      } else {
        // 数据库中的普通角色
        const char = characters.find((c) => c.id === characterId);
        if (char) {
          await api.updateCharacter(characterId, char.name, char.description, voiceId);
        }
      }
    } catch (error) {
      console.error('Failed to set character voice:', error);
      // 回滚本地状态
      loadData();
    }
  };

  const startEditCharacter = (character: Character) => {
    setEditingCharacterId(character.id);
    setEditingAliases((character.aliases || []).join(', '));
    setEditingGender(character.gender || '');
    setEditingAge(character.age || '');
    setEditingDescription(character.description || '');
  };

  const saveEditCharacter = async (character: Character) => {
    try {
      const aliasesArray = editingAliases
        .split(',')
        .map((a) => a.trim())
        .filter((a) => a.length > 0);

      // 更新本地状态
      setCharacters((prev) =>
        prev.map((c) =>
          c.id === character.id
            ? {
                ...c,
                description: editingDescription,
                gender: editingGender,
                age: editingAge,
                aliases: aliasesArray,
              }
            : c
        )
      );

      // 保存到后端
      if (character.id < 0) {
        // knownCharacters中的角色
        await api.updateKnownCharacter(
          projectId,
          character.name,
          editingDescription,
          editingGender,
          editingAge,
          aliasesArray
        );
      } else {
        // 数据库中的普通角色 - 使用新API保存所有字段
        await api.updateCharacterWithDetails(
          character.id,
          character.name,
          editingDescription,
          character.voiceId,
          editingGender,
          editingAge,
          aliasesArray
        );
      }

      cancelEditCharacter();
    } catch (error) {
      console.error('Failed to save character:', error);
      // 回滚本地状态
      loadData();
    }
  };

  const cancelEditCharacter = () => {
    setEditingCharacterId(null);
    setEditingAliases('');
    setEditingGender('');
    setEditingAge('');
    setEditingDescription('');
  };

  const getVoiceName = (voiceId: string): string => {
    const voice = voices.find((v) => v.id === voiceId);
    return voice ? voice.name : '未设置';
  };

  const displayGender = (gender: string): string => {
    return GenderNameMap[gender] || '未知';
  };

  const displayAge = (age: string): string => {
    return AgeNameMap[age] || '未知';
  };

  const displayAliases = (aliases: string[]): string => {
    if (!aliases || aliases.length === 0) return '-';
    return aliases.join(', ');
  };

  const displayChapters = (chapterNames: string[]): string => {
    if (!chapterNames || chapterNames.length === 0) return '-';
    if (chapterNames.length <= 2) {
      return chapterNames.join(', ');
    }
    return `${chapterNames[0]}, ${chapterNames[1]}... (${chapterNames.length}章)`;
  };

  const displayLastSeen = (timestamp: number): string => {
    if (!timestamp) return '-';
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="role-manager">
      <div className="role-manager-header">
        <div className="header-left">
          <h2>角色管理</h2>
          {filteredCharacters.length > 0 && (
            <span className="count-badge">{filteredCharacters.length}</span>
          )}
        </div>

        {/* 搜索框 */}
        <div className="search-box">
          <Search size={14} />
          <input
            type="text"
            placeholder="搜索角色..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button
              className="btn-clear-search"
              onClick={() => setSearchQuery('')}
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      <div className="role-table-container">
        {isLoading && characters.length === 0 ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>加载中...</p>
          </div>
        ) : filteredCharacters.length === 0 ? (
          <div className="empty-state">
            <h3>暂无角色</h3>
            <p>使用 LLM 解析文本后，识别到的角色会显示在这里</p>
          </div>
        ) : (
          <>
            {/* 滚动容器 */}
            <div className="table-scroll-wrapper">
              {/* 角色表格 */}
              <table className="role-table">
                <thead>
                  <tr>
                    <th className="col-name">姓名</th>
                    <th className="col-chapters">出现章节</th>
                    <th className="col-aliases">别名</th>
                    <th className="col-gender">性别</th>
                    <th className="col-age">年龄</th>
                    <th className="col-voice">音色</th>
                    <th className="col-desc">简介</th>
                    <th className="col-updated">最后发现</th>
                    <th className="col-actions">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedCharacters.map((character) => (
                    <React.Fragment key={`${character.id}-${character.name}`}>
                      <tr className={character.id === 0 ? 'narrator-row' : 'character-row'}>
                        <td className="col-name">
                          <div className="name-cell">
                            <span className="character-name">{character.name}</span>
                            {character.id === 0 && (
                              <span className="badge narrator-badge">系统</span>
                            )}
                            {character.id !== 0 && character.id < 0 && (
                              <span className="badge ai-badge">AI识别</span>
                            )}
                          </div>
                        </td>

                        <td className="col-chapters">
                          <span
                            className="chapter-list"
                            title={(character as any).chapterNames?.join(', ')}
                          >
                            {displayChapters((character as any).chapterNames)}
                          </span>
                        </td>

                        <td className="col-aliases">
                          {editingCharacterId === character.id ? (
                            <input
                              type="text"
                              className="edit-input-inline"
                              value={editingAliases}
                              onChange={(e) => setEditingAliases(e.target.value)}
                              placeholder="多个别名用逗号分隔"
                            />
                          ) : (
                            <span
                              className="alias-list"
                              title={displayAliases(character.aliases)}
                            >
                              {displayAliases(character.aliases)}
                            </span>
                          )}
                        </td>

                        <td className="col-gender">
                          {editingCharacterId === character.id ? (
                            <select
                              className="edit-select-inline"
                              value={editingGender}
                              onChange={(e) => setEditingGender(e.target.value)}
                            >
                              <option value="">选择性别</option>
                              <option value={GenderMale}>男</option>
                              <option value={GenderFemale}>女</option>
                              <option value={GenderUnknown}>未知</option>
                            </select>
                          ) : (
                            <span className="gender-badge">
                              {displayGender(character.gender)}
                            </span>
                          )}
                        </td>

                        <td className="col-age">
                          {editingCharacterId === character.id ? (
                            <select
                              className="edit-select-inline"
                              value={editingAge}
                              onChange={(e) => setEditingAge(e.target.value)}
                            >
                              <option value="">选择年龄段</option>
                              <option value={AgeChild}>儿童</option>
                              <option value={AgeTeen}>少年</option>
                              <option value={AgeAdult}>成人</option>
                              <option value={AgeSenior}>老年</option>
                              <option value={AgeUnknown}>未知</option>
                            </select>
                          ) : (
                            <span className="age-badge">
                              {displayAge(character.age)}
                            </span>
                          )}
                        </td>

                        <td className="col-voice">
                          <select
                            className="voice-select-inline"
                            value={character.voiceId || ''}
                            onChange={(e) => handleVoiceChange(character.id, e.target.value)}
                            disabled={isLoading}
                          >
                            <option value="">选择音色</option>
                            {Object.entries(groupedVoices).map(([category, categoryVoices]) => (
                              <optgroup key={category} label={CategoryNameMap[category] || category}>
                                {categoryVoices.map((voice) => (
                                  <option key={voice.id} value={voice.id}>
                                    {voice.name} {voice.gender ? `(${VoiceGenderNameMap[voice.gender] || voice.gender})` : ''}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </td>

                        <td className="col-desc">
                          {editingCharacterId === character.id ? (
                            <input
                              type="text"
                              className="edit-input-inline"
                              value={editingDescription}
                              onChange={(e) => setEditingDescription(e.target.value)}
                              placeholder="角色简介"
                            />
                          ) : (
                            <span
                              className="description-text"
                              title={character.description}
                            >
                              {character.description || '-'}
                            </span>
                          )}
                        </td>

                        <td className="col-updated">
                          <span className="last-seen">
                            {displayLastSeen((character as any).lastSeenAt)}
                          </span>
                        </td>

                        <td className="col-actions">
                          {editingCharacterId === character.id ? (
                            <div className="edit-actions-inline">
                              <button
                                className="btn-ghost btn-small"
                                onClick={cancelEditCharacter}
                              >
                                <X size={12} />
                              </button>
                              <button
                                className="btn-primary btn-small"
                                onClick={() => saveEditCharacter(character)}
                              >
                                <Edit2 size={12} />
                              </button>
                            </div>
                          ) : (
                            <div className="actions-cell">
                              {character.id !== 0 && (
                                <>
                                  <button
                                    className="btn-icon btn-edit"
                                    onClick={() => startEditCharacter(character)}
                                    disabled={isLoading}
                                    title="编辑"
                                  >
                                    <Edit2 size={14} />
                                  </button>
                                  <button
                                    className="btn-icon"
                                    onClick={() => handleDeleteCharacter(character.id)}
                                    disabled={isLoading}
                                    title="删除"
                                  >
                                    <Trash2 size={14} />
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 分页器 */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  className="btn-page"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={14} />
                </button>

                <span className="page-info">
                  第 {currentPage} / {totalPages} 页
                </span>

                <button
                  className="btn-page"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
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
          padding: 10px 16px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
          gap: 12px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #CBD5E1;
          flex-shrink: 0;
        }

        .header-left h2 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .count-badge {
          padding: 1px 8px;
          background: #10B981;
          color: white;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 6px;
          padding: 4px 10px;
          flex: 1;
          max-width: 320px;
          transition: all 0.2s ease;
        }

        .search-box:focus-within {
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .search-box svg {
          color: #64748B;
          flex-shrink: 0;
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #E2E8F0;
          font-size: 0.85rem;
          outline: none;
        }

        .search-input::placeholder {
          color: #64748B;
        }

        .btn-clear-search {
          background: transparent;
          border: none;
          color: #64748B;
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .btn-clear-search:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #E2E8F0;
        }

        .role-table-container {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background-color: #151E2B;
        }

        .table-scroll-wrapper {
          flex: 1;
          overflow-x: auto;
          overflow-y: auto;
        }

        .table-scroll-wrapper::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }

        .table-scroll-wrapper::-webkit-scrollbar-track {
          background: #1A2432;
        }

        .table-scroll-wrapper::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }

        .table-scroll-wrapper::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px;
          color: #64748B;
        }

        .spinner {
          width: 24px;
          height: 24px;
          border: 2px solid #334155;
          border-top: 2px solid #10B981;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 10px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 32px;
          color: #64748B;
        }

        .empty-state h3 {
          margin: 12px 0 6px;
          color: #E2E8F0;
          font-size: 1rem;
        }

        .role-table {
          width: 100%;
          border-collapse: collapse;
          flex: 1;
        }

        .role-table thead {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #1A2432;
        }

        .role-table th {
          padding: 8px 12px;
          text-align: left;
          font-size: 0.72rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #2D3E54;
        }

        .role-table td {
          padding: 8px 12px;
          border-bottom: 1px solid #243447;
          vertical-align: middle;
        }

        .role-table tbody tr {
          transition: background-color 0.15s ease;
        }

        .role-table tbody tr:hover {
          background-color: rgba(255, 255, 255, 0.03);
        }

        .narrator-row {
          background-color: rgba(0, 168, 255, 0.04);
        }

        /* 列宽 - 更紧凑 */
        .col-name { width: 120px; min-width: 120px; }
        .col-chapters { width: 90px; min-width: 90px; }
        .col-aliases { width: 100px; min-width: 100px; }
        .col-gender { width: 60px; min-width: 60px; }
        .col-age { width: 60px; min-width: 60px; }
        .col-voice { width: 130px; min-width: 130px; }
        .col-desc { width: 160px; min-width: 160px; }
        .col-updated { width: 80px; min-width: 80px; }
        .col-actions { width: 80px; min-width: 80px; }

        .name-cell {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .character-name {
          color: #F1F5F9;
          font-weight: 500;
          font-size: 0.85rem;
        }

        .badge {
          padding: 1px 6px;
          border-radius: 3px;
          font-size: 0.68rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .narrator-badge {
          background-color: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
        }

        .ai-badge {
          background-color: rgba(16, 185, 129, 0.15);
          color: #10B981;
        }

        .chapter-list {
          color: #94A3B8;
          font-size: 0.8rem;
        }

        .alias-list {
          color: #94A3B8;
          font-size: 0.8rem;
        }

        .gender-badge,
        .age-badge {
          color: #94A3B8;
          font-size: 0.8rem;
        }

        .voice-select-inline {
          width: 100%;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 4px;
          color: #E2E8F0;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .voice-select-inline:hover {
          border-color: #00A8FF;
        }

        .voice-select-inline:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .description-text {
          color: #94A3B8;
          font-size: 0.8rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .last-seen {
          color: #64748B;
          font-size: 0.78rem;
        }

        .actions-cell {
          display: flex;
          gap: 4px;
        }

        .edit-actions-inline {
          display: flex;
          gap: 4px;
        }

        .btn-icon {
          width: 24px;
          height: 24px;
          padding: 0;
          border: none;
          border-radius: 4px;
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

        .btn-icon.btn-edit:hover:not(:disabled),
        .btn-icon.btn-danger:hover:not(:disabled) {
          background: rgba(0, 168, 255, 0.15);
          color: #00A8FF;
        }

        .btn-icon:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-ghost {
          padding: 4px 8px;
          border: 1px solid transparent;
          background: transparent;
          color: #94A3B8;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          transition: all 0.2s ease;
        }

        .btn-ghost:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #E2E8F0;
        }

        .btn-ghost.btn-small {
          padding: 3px 6px;
        }

        .btn-primary {
          padding: 4px 8px;
          border: none;
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border-radius: 4px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.35);
        }

        .btn-primary.btn-small {
          padding: 3px 6px;
        }

        .edit-input-inline {
          width: 100%;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 4px;
          color: #E2E8F0;
          font-size: 0.78rem;
        }

        .edit-input-inline:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .edit-select-inline {
          width: 100%;
          padding: 4px 8px;
          background-color: #151E2B;
          border: 1px solid #2D3E54;
          border-radius: 4px;
          color: #E2E8F0;
          font-size: 0.78rem;
        }

        .edit-select-inline:focus {
          outline: none;
          border-color: #00A8FF;
          box-shadow: 0 0 0 2px rgba(0, 168, 255, 0.2);
        }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 10px 16px;
          border-top: 1px solid #243447;
          background: #1A2432;
        }

        .btn-page {
          width: 26px;
          height: 26px;
          padding: 0;
          border: 1px solid #2D3E54;
          background: #151E2B;
          color: #94A3B8;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .btn-page:hover:not(:disabled) {
          border-color: #00A8FF;
          color: #E2E8F0;
        }

        .btn-page:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .page-info {
          color: #94A3B8;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
};

export default RoleManager;
