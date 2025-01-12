import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon/Icon';
import './Modal.css';

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  className = ''
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal modal-${size} ${className}`}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          {title && <h3 className="modal-title">{title}</h3>}
          <button className="modal-close" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal; 