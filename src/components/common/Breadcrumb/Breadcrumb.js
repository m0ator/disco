import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import './Breadcrumb.css';

export const Breadcrumb = ({ children, className = '' }) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {children}
      </ol>
    </nav>
  );
};

export const BreadcrumbItem = ({ 
  children, 
  href, 
  active = false,
  className = '' 
}) => {
  const content = href ? (
    <Link to={href} className="breadcrumb-link">
      {children}
    </Link>
  ) : (
    children
  );

  return (
    <li 
      className={`breadcrumb-item ${active ? 'breadcrumb-active' : ''} ${className}`}
      aria-current={active ? 'page' : undefined}
    >
      {content}
      {!active && <Icon name="chevron_right" className="breadcrumb-separator" />}
    </li>
  );
}; 