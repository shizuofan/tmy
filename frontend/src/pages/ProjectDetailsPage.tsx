import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, X, BookOpen, Calendar, Clock, Users, Sparkles } from 'lucide-react';
import api from '../utils/api';
import ChapterManager from '../components/ChapterManager';
import RoleManager from '../components/RoleManager';
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
      <div className="project-details-page">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="error-container">
          <h2>项目不存在</h2>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      {/* 固定顶部导航栏 */}
      <header className="page-header">
        <div className="header-inner">
          <div className="header-left">
            <Link to="/" className="back-button">
              <ArrowLeft size={18} />
              <span>返回</span>
            </Link>
            <div className="divider"></div>
            <div className="project-title">
              <BookOpen size={20} className="title-icon" />
              <div>
                <h1>{project.name}</h1>
                <p className="subtitle">有声小说制作工程</p>
              </div>
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
      </header>

      {/* 主内容区域 */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* 项目信息卡片 */}
          <section className="project-info-section">
            <div className="section-header">
              <h2>
                <Sparkles size={18} />
                项目概览
              </h2>
              {!isEditing && (
                <button
                  className="btn-ghost"
                  onClick={() => setIsEditing(true)}
                  disabled={isLoading}
                >
                  编辑信息
                </button>
              )}
            </div>

            <div className="project-info-card">
              {!isEditing ? (
                <div className="project-info-content">
                  <div className="info-grid">
                    <div className="info-item">
                      <div className="info-label">项目名称</div>
                      <div className="info-value">{project.name}</div>
                    </div>
                    <div className="info-item">
                      <div className="info-label">项目描述</div>
                      <div className="info-value">{project.description || '暂无描述'}</div>
                    </div>
                  </div>
                  <div className="meta-row">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>创建于 {new Date(project.createdAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>更新于 {new Date(project.updatedAt).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="project-info-edit">
                  <div className="form-grid">
                    <div className="form-group full-width">
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
                    <div className="form-group full-width">
                      <label htmlFor="project-description">项目描述</label>
                      <textarea
                        id="project-description"
                        value={editProject.description}
                        onChange={(e) =>
                          setEditProject({ ...editProject, description: e.target.value })
                        }
                        placeholder="请输入项目描述"
                        rows={3}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="form-actions">
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
                    <button
                      className="btn-primary"
                      onClick={handleSaveProject}
                      disabled={isLoading}
                    >
                      <Save size={16} />
                      保存更改
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 角色管理区域 */}
          <section className="character-section">
            <div className="section-header">
              <h2>
                <Users size={18} />
                角色管理
              </h2>
            </div>
            <div className="role-manager-wrapper">
              <RoleManager projectId={parseInt(id || '0')} />
            </div>
          </section>

          {/* 章节管理区域 */}
          <section className="chapter-section">
            <div className="section-header">
              <h2>
                <BookOpen size={18} />
                章节管理
              </h2>
            </div>
            <div className="chapter-manager-wrapper">
              <ChapterManager projectId={parseInt(id || '0')} />
            </div>
          </section>
        </div>
      </main>

      <style>{`
        .project-details-page {
          background-color: #151E2B;
          color: #ECF0F1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding-top: 73px;
        }

        /* 固定顶部导航栏 */
        .page-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: linear-gradient(135deg, #1E2A3A 0%, #253548 100%);
          border-bottom: 1px solid #2D3E54;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
        }

        .header-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }

        .back-button {
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

        .back-button:hover {
          color: #ECF0F1;
          background: rgba(255, 255, 255, 0.06);
        }

        .divider {
          width: 1px;
          height: 32px;
          background: linear-gradient(to bottom, transparent, #334155, transparent);
        }

        .project-title {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .title-icon {
          color: #00A8FF;
          flex-shrink: 0;
        }

        .project-title h1 {
          margin: 0;
          font-size: 1.15rem;
          font-weight: 600;
          color: #F1F5F9;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .subtitle {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748B;
        }

        .header-right {
          display: flex;
          gap: 10px;
        }

        /* 主内容区域 */
        .main-content {
          flex: 1;
          overflow-y: auto;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 28px 24px 40px;
        }

        /* 区块通用样式 */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .section-header h2 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: #CBD5E1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .project-info-section,
        .character-section,
        .chapter-section {
          margin-bottom: 28px;
        }

        /* 角色管理容器 */
        .role-manager-wrapper {
          background: #1E2A3A;
          border: 1px solid #2D3E54;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        /* 项目信息卡片 */
        .project-info-card {
          background: linear-gradient(145deg, #1E2A3A 0%, #1A2432 100%);
          border: 1px solid #2D3E54;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        .project-info-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .info-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-size: 1rem;
          color: #E2E8F0;
          line-height: 1.5;
        }

        .meta-row {
          display: flex;
          gap: 24px;
          padding-top: 16px;
          border-top: 1px solid #2D3E54;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #64748B;
        }

        .meta-item svg {
          color: #475569;
        }

        /* 编辑表单 */
        .project-info-edit {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: #94A3B8;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          padding: 10px 14px;
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
          min-height: 80px;
          resize: vertical;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding-top: 8px;
        }

        /* 章节管理容器 */
        .chapter-manager-wrapper {
          background: #1E2A3A;
          border: 1px solid #2D3E54;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }

        /* 按钮样式 */
        .btn-primary,
        .btn-secondary,
        .btn-ghost {
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

        .btn-ghost {
          background: transparent;
          color: #94A3B8;
          border: 1px solid transparent;
        }

        .btn-ghost:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.06);
          color: #E2E8F0;
        }

        .btn-primary:disabled,
        .btn-secondary:disabled,
        .btn-ghost:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
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

        .error-container h2 {
          margin: 0 0 20px;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailsPage;
