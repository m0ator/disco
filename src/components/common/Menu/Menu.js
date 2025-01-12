import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import './Menu.css';

export const Menu = ({ children, className = '' }) => {
  return (
    <nav className={`menu ${className}`}>
      {children}
    </nav>
  );
};

export const MenuItem = ({ 
  children,
  icon,
  active = false,
  expanded = false,
  onClick,
  className = ''
}) => {
  return (
    <button
      className={`menu-item ${active ? 'menu-item-active' : ''} ${className}`}
      onClick={onClick}
    >
      {icon && <Icon name={icon} className="menu-item-icon" />}
      <span className="menu-item-text">{children}</span>
      {expanded !== undefined && (
        <Icon 
          name="chevron_down" 
          className={`menu-item-expand ${expanded ? 'expanded' : ''}`} 
        />
      )}
    </button>
  );
};

export const SubMenu = ({ 
  title,
  icon,
  children,
  defaultExpanded = false,
  className = ''
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className={`submenu ${className}`}>
      <MenuItem
        icon={icon}
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {title}
      </MenuItem>
      {expanded && (
        <div className="submenu-content">
          {children}
        </div>
      )}
    </div>
  );
}; 