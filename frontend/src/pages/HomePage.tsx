import React, { useState, useEffect } from 'react';
import { Plus, FolderOpen, Trash2, Edit2, ChevronRight } from 'lucide-react';
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
        <h1>听墨语 - 有声小说制作</h1>
        <p>创建、编辑和管理您的有声小说工程</p>
      </div>

      <div className="projects-container">
        {/* 创建工程按钮 */}
        <div className="create-project-section">
          <button
            className="create-project-btn"
            onClick={() => setShowCreateModal(true)}
            disabled={isLoading}
          >
            <Plus size={20} />
            创建新工程
          </button>
        </div>

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
            projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <span className="created-at">
                      创建于: {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                    <span className="updated-at">
                      更新于: {new Date(project.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="project-actions">
                  <button
                    className="btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Edit project:', project.id);
                    }}
                    disabled={isLoading}
                  >
                    <Edit2 size={16} />
                    编辑
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
                <ChevronRight size={24} className="arrow-right" />
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
          background-color: #1b2636;
          color: #ffffff;
          padding: 20px;
        }

        .page-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #00a8ff;
        }

        .page-header p {
          color: #b0bec5;
          font-size: 1.1rem;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .create-project-section {
          margin-bottom: 30px;
          text-align: center;
        }

        .create-project-btn {
          background-color: #00a8ff;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0 auto;
          transition: background-color 0.3s;
        }

        .create-project-btn:hover:not(:disabled) {
          background-color: #0088cc;
        }

        .create-project-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .projects-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .project-card {
          background-color: #2c3e50;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .arrow-right {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #7f8c8d;
          transition: color 0.3s;
        }

        .project-card:hover .arrow-right {
          color: #00a8ff;
        }

        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .project-info h3 {
          margin: 0;
          color: #00a8ff;
          font-size: 1.2rem;
        }

        .project-description {
          color: #b0bec5;
          margin: 8px 0;
          line-height: 1.4;
        }

        .project-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.85rem;
          color: #78909c;
        }

        .project-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .btn-primary,
        .btn-secondary,
        .btn-danger {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          transition: background-color 0.3s;
        }

        .btn-primary {
          background-color: #00a8ff;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background-color: #0088cc;
        }

        .btn-secondary {
          background-color: #546e7a;
          color: white;
        }

        .btn-secondary:hover:not(:disabled) {
          background-color: #455a64;
        }

        .btn-danger {
          background-color: #ff6b6b;
          color: white;
        }

        .btn-danger:hover:not(:disabled) {
          background-color: #ee5253;
        }

        .btn-primary:disabled,
        .btn-secondary:disabled,
        .btn-danger:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .loading {
          text-align: center;
          padding: 40px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #00a8ff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #b0bec5;
        }

        .empty-state h2 {
          color: #ffffff;
          margin: 20px 0 10px;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: #2c3e50;
          border-radius: 8px;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #34495e;
        }

        .modal-header h2 {
          margin: 0;
          color: #00a8ff;
        }

        .modal-close {
          background: none;
          border: none;
          color: #b0bec5;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .modal-close:hover {
          background-color: #34495e;
          color: #ffffff;
        }

        .modal-content form {
          padding: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #b0bec5;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #34495e;
          border-radius: 4px;
          background-color: #1e272e;
          color: #ffffff;
          font-size: 1rem;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #00a8ff;
          box-shadow: 0 0 0 3px rgba(0, 168, 255, 0.1);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 15px 20px;
          border-top: 1px solid #34495e;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
