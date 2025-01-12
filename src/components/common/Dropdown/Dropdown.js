import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import './Dropdown.css';

export const Dropdown = ({ 
  trigger,
  children,
  placement = 'bottom-start',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`dropdown ${className}`} ref={dropdownRef}>
      <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>
      {isOpen && (
        <div className={`dropdown-content dropdown-${placement}`}>
          {children}
        </div>
      )}
    </div>
  );
};

export const DropdownItem = ({ 
  children,
  icon,
  onClick,
  disabled = false,
  className = ''
}) => {
  return (
    <button
      className={`dropdown-item ${disabled ? 'dropdown-item-disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon name={icon} className="dropdown-item-icon" />}
      <span className="dropdown-item-text">{children}</span>
    </button>
  );
};

export const DropdownDivider = () => <div className="dropdown-divider" />; 