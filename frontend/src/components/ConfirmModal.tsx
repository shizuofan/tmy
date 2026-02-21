import React from 'react';
import { X, AlertTriangle, CheckCircle } from 'lucide-react';

export interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'warning' | 'danger' | 'info';
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  confirmText = '确定',
  cancelText = '取消',
  type = 'warning',
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'danger':
        return <AlertTriangle size={28} className="text-red-500" />;
      case 'warning':
        return <AlertTriangle size={28} className="text-yellow-500" />;
      case 'info':
        return <CheckCircle size={28} className="text-blue-500" />;
      default:
        return <AlertTriangle size={28} className="text-yellow-500" />;
    }
  };

  const getConfirmButtonClass = () => {
    switch (type) {
      case 'danger':
        return 'btn-danger';
      case 'warning':
        return 'btn-primary';
      case 'info':
        return 'btn-primary';
      default:
        return 'btn-primary';
    }
  };

  return (
    <div className="confirm-modal-overlay" onClick={onCancel}>
      <div className="confirm-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-modal-header">
          <div className="confirm-modal-title">
            {getIcon()}
            <h2>{title}</h2>
          </div>
          <button className="modal-close" onClick={onCancel}>
            <X size={24} />
          </button>
        </div>
        <div className="confirm-modal-body">
          <p className="confirm-message">{message}</p>
        </div>
        <div className="confirm-modal-footer">
          <button className="btn-secondary" onClick={onCancel}>
            {cancelText}
          </button>
          <button className={getConfirmButtonClass()} onClick={onConfirm}>
            {confirmText}
          </button>
        </div>

        <style>{`
          .confirm-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(6px);
            padding: 20px;
            box-sizing: border-box;
          }

          .confirm-modal-content {
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

          .confirm-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            border-bottom: 1px solid #2D3E54;
            flex-shrink: 0;
          }

          .confirm-modal-title {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #E2E8F0;
          }

          .confirm-modal-title h2 {
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

          .confirm-modal-body {
            padding: 24px;
          }

          .confirm-message {
            margin: 0;
            color: #E2E8F0;
            font-size: 0.95rem;
            line-height: 1.6;
          }

          .confirm-modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            padding: 16px 24px 24px;
            border-top: 1px solid #2D3E54;
            flex-shrink: 0;
          }

          .btn-primary,
          .btn-secondary,
          .btn-danger {
            padding: 9px 18px;
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
            background: #2A3442;
            color: #E2E8F0;
            border: 1px solid #3A4A5C;
          }

          .btn-secondary:hover:not(:disabled) {
            background: #3A4A5C;
            border-color: #4A5A6C;
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
        `}</style>
      </div>
    </div>
  );
};

export default ConfirmModal;
