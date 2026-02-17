import React, { useState, useEffect } from 'react';
import { Plus, FolderOpen, Trash2, ExternalLink, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { Project } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  // 加载工程列表
  const loadProjects = async () => {
    setIsLoading(true);
    try {
      const data = await api.getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Failed to load projects:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // 创建工程
  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name.trim()) return;

    setIsLoading(true);
    try {
      await api.createProject(newProject.name, newProject.description);
      setNewProject({ name: '', description: '' });
      setShowCreateModal(false);
      loadProjects();
    } catch (error) {
      console.error('Failed to create project:', error);
    }
    setIsLoading(false);
  };

  // 删除工程
  const handleDeleteProject = async (id: number) => {
    if (!window.confirm('确定要删除此工程吗？')) return;

    setIsLoading(true);
    try {
      await api.deleteProject(id);
      loadProjects();
    } catch (error) {
      console.error('Failed to delete project:', error);
    }
    setIsLoading(false);
  };

  // 跳转到项目详情页
  const handleProjectClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="home-page">
      <div className="page-header">
        <div className="header-content">
          <BookOpen size={28} className="header-icon" />
          <div>
            <h1>听墨语 - 有声小说制作</h1>
            <p>创建、编辑和管理您的有声小说工程</p>
          </div>
        </div>
        <button
          className="create-project-btn"
          onClick={() => setShowCreateModal(true)}
          disabled={isLoading}
        >
          <Plus size={20} />
          创建新工程
        </button>
      </div>

      <div className="projects-container">
        {/* 工程列表 */}
        <div className="projects-list">
          {isLoading && projects.length === 0 ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>加载中...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="empty-state">
              <FolderOpen size={64} />
              <h2>暂无工程</h2>
              <p>点击上方按钮创建您的第一个有声小说工程</p>
            </div>
          ) : (
            projects.map((project, index) => (
              <div
                key={project.id}
                className="project-item"
              >
                <div className="project-info" onClick={() => handleProjectClick(project.id)}>
                  <div className="project-index">{index + 1}</div>
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description || '暂无描述'}</p>
                    <div className="project-meta">
                      <span>创建时间: {new Date(project.createdAt).toLocaleDateString()}</span>
                      <span>更新时间: {new Date(project.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    className="btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}
                    disabled={isLoading}
                    title="打开项目"
                  >
                    <ExternalLink size={16} />
                    打开
                  </button>
                  <button
                    className="btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteProject(project.id);
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
      </div>

      {/* 创建工程模态框 */}
      {showCreateModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>创建新工程</h2>
              <button
                className="modal-close"
                onClick={() => setShowCreateModal(false)}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleCreateProject}>
              <div className="form-group">
                <label htmlFor="project-name">工程名称</label>
                <input
                  type="text"
                  id="project-name"
                  value={newProject.name}
                  onChange={(e) =>
                    setNewProject({ ...newProject, name: e.target.value })
                  }
                  placeholder="请输入工程名称"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="project-description">工程描述</label>
                <textarea
                  id="project-description"
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({ ...newProject, description: e.target.value })
                  }
                  placeholder="请输入工程描述"
                  rows={3}
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
        .home-page {
          min-height: 100vh;
          background-color: #151E2B;
          color: #ECF0F1;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: linear-gradient(135deg, #1E2A3A 0%, #1A2432 100%);
          border-bottom: 1px solid #2D3E54;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .header-icon {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .page-header h1 {
          margin: 0 0 4px 0;
          font-size: 1.4rem;
          color: #F1F5F9;
          font-weight: 700;
        }

        .page-header p {
          margin: 0;
          color: #94A3B8;
          font-size: 0.9rem;
        }

        .projects-container {
          flex: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 20px 24px;
        }

        .create-project-btn {
          background: linear-gradient(135deg, #00A8FF 0%, #0088CC 100%);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 168, 255, 0.3);
          flex-shrink: 0;
        }

        .create-project-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 168, 255, 0.4);
        }

        .create-project-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .projects-list {
          flex: 1;
          overflow-y: auto;
        }

        .project-item {
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

        .project-item:hover {
          background: linear-gradient(145deg, #253345 0%, #1E2A3A 100%);
          border-color: #00A8FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .project-info {
          flex: 1;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .project-index {
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
          flex-shrink: 0;
        }

        .project-content {
          flex: 1;
          min-width: 0;
        }

        .project-content h3 {
          margin: 0 0 6px 0;
          color: #F1F5F9;
          font-size: 1rem;
          font-weight: 600;
        }

        .project-description {
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

        .project-meta {
          display: flex;
          gap: 16px;
          font-size: 0.78rem;
          color: #64748B;
        }

        .project-actions {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-shrink: 0;
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

        .loading {
          text-align: center;
          padding: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748B;
        }

        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid #334155;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #64748B;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .empty-state h2 {
          color: #E2E8F0;
          margin: 20px 0 8px;
          font-size: 1.1rem;
        }

        .empty-state p {
          margin: 0;
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
          font-size: 28px;
          line-height: 1;
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
          min-height: 100px;
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
      `}</style>
    </div>
  );
};

export default HomePage;
