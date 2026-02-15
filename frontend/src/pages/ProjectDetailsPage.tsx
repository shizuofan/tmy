import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, X } from 'lucide-react';
import api from '../utils/api';
import ChapterManager from '../components/ChapterManager';
import { Project } from '../types';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editProject, setEditProject] = useState({ name: '', description: '' });

  useEffect(() => {
    if (id) {
      loadProject(parseInt(id));
    }
  }, [id]);

  const loadProject = async (projectId: number) => {
    setIsLoading(true);
    try {
      const data = await api.getProject(projectId);
      setProject(data);
      if (data) {
        setEditProject({
          name: data.name,
          description: data.description,
        });
      }
    } catch (error) {
      console.error('Failed to load project:', error);
    }
    setIsLoading(false);
  };

  const handleSaveProject = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      await api.updateProject(parseInt(id), editProject.name, editProject.description);
      setIsEditing(false);
      loadProject(parseInt(id));
    } catch (error) {
      console.error('Failed to update project:', error);
    }
    setIsLoading(false);
  };

  if (isLoading && !project) {
    return (
      <div className="loading-page">
        <div className="spinner"></div>
        <p>加载中...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="error-page">
        <h2>项目不存在</h2>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} />
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <div className="page-header">
        <div className="header-left">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            返回
          </Link>
          <div className="project-title">
            <h1>项目详情</h1>
            <p>管理项目的章节和角色</p>
          </div>
        </div>
        <div className="header-right">
          <button
            className="btn-secondary"
            onClick={() => navigate('/')}
          >
            返回首页
          </button>
        </div>
      </div>

      <div className="content-wrapper">
        {/* 项目信息编辑区域 */}
        <div className="project-info-section">
          <h2>项目信息</h2>
          <div className="project-info-card">
            {!isEditing ? (
              <div className="project-info-content">
                <div className="info-item">
                  <label>项目名称</label>
                  <p>{project.name}</p>
                </div>
                <div className="info-item">
                  <label>项目描述</label>
                  <p>{project.description || '无描述'}</p>
                </div>
                <div className="info-item">
                  <label>创建时间</label>
                  <p>{new Date(project.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="info-item">
                  <label>更新时间</label>
                  <p>{new Date(project.updatedAt).toLocaleDateString()}</p>
                </div>
                <div className="project-actions">
                  <button
                    className="btn-primary"
                    onClick={() => setIsEditing(true)}
                    disabled={isLoading}
                  >
                    编辑项目信息
                  </button>
                </div>
              </div>
            ) : (
              <div className="project-info-edit">
                <div className="form-group">
                  <label htmlFor="project-name">项目名称</label>
                  <input
                    id="project-name"
                    type="text"
                    value={editProject.name}
                    onChange={(e) =>
                      setEditProject({ ...editProject, name: e.target.value })
                    }
                    placeholder="请输入项目名称"
                    disabled={isLoading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="project-description">项目描述</label>
                  <textarea
                    id="project-description"
                    value={editProject.description}
                    onChange={(e) =>
                      setEditProject({ ...editProject, description: e.target.value })
                    }
                    placeholder="请输入项目描述"
                    rows={4}
                    disabled={isLoading}
                  />
                </div>
                <div className="form-actions">
                  <button
                    className="btn-primary"
                    onClick={handleSaveProject}
                    disabled={isLoading}
                  >
                    <Save size={16} />
                    保存
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => {
                      setIsEditing(false);
                      setEditProject({
                        name: project.name,
                        description: project.description,
                      });
                    }}
                    disabled={isLoading}
                  >
                    <X size={16} />
                    取消
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 章节管理区域 */}
        <div className="chapter-manager-section">
          <ChapterManager projectId={parseInt(id || '0')} />
        </div>
      </div>

      <style>{`
        .project-details-page {
          background-color: #1B2636;
          color: #ECF0F1;
          min-height: 100vh;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background-color: #2C3E50;
          border-bottom: 1px solid #34495E;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .back-button {
          color: #B0BEC5;
          text-decoration: none;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .back-button:hover {
          color: #ECF0F1;
          background-color: #34495E;
        }

        .project-title h1 {
          margin: 0;
          color: #ECF0F1;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .project-title p {
          margin: 4px 0 0;
          color: #B0BEC5;
          font-size: 0.9rem;
        }

        .header-right {
          display: flex;
          gap: 10px;
        }

        .content-wrapper {
          padding: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-info-section {
          margin-bottom: 40px;
        }

        .project-info-section h2 {
          margin: 0 0 20px 0;
          color: #ECF0F1;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .project-info-card {
          background-color: #2C3E50;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .project-info-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .info-item label {
          color: #B0BEC5;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .info-item p {
          margin: 0;
          color: #ECF0F1;
          font-size: 1rem;
          line-height: 1.4;
        }

        .project-actions {
          margin-top: 20px;
        }

        .project-info-edit {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          color: #B0BEC5;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 10px;
          background-color: #1E272E;
          border: 1px solid #34495E;
          border-radius: 6px;
          color: #ECF0F1;
          font-size: 1rem;
          font-family: inherit;
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
        }

        .form-actions {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .chapter-manager-section {
          background-color: #2C3E50;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .btn-primary,
        .btn-secondary {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .btn-primary {
          background-color: #00A8FF;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background-color: #0088CC;
        }

        .btn-secondary {
          background-color: #95A5A6;
          color: white;
        }

        .btn-secondary:hover:not(:disabled) {
          background-color: #7F8C8D;
        }

        .btn-primary:disabled,
        .btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .loading-page,
        .error-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          color: #ECF0F1;
        }

        .spinner {
          width: 30px;
          height: 30px;
          border: 3px solid #F3F3F3;
          border-top: 3px solid #00A8FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .error-page h2 {
          margin: 0 0 20px 0;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailsPage;
