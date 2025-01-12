import React from 'react';
import { Icon } from '../Icon/Icon';
import './List.css';

export const List = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  return (
    <ul className={`list list-${variant} list-${size} ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            variant,
            size,
            ...child.props
          });
        }
        return child;
      })}
    </ul>
  );
};

export const ListItem = ({
  primary,
  secondary,
  icon,
  avatar,
  action,
  divider = true,
  variant = 'default',
  size = 'md',
  onClick,
  className = ''
}) => {
  return (
    <li 
      className={`
        list-item
        list-item-${variant}
        ${onClick ? 'clickable' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {avatar && (
        <div className="list-avatar">
          <img src={avatar} alt={typeof primary === 'string' ? primary : ''} />
        </div>
      )}
      
      {icon && !avatar && (
        <div className="list-icon">
          <Icon name={icon} />
        </div>
      )}
      
      <div className="list-content">
        <div className="list-primary">{primary}</div>
        {secondary && (
          <div className="list-secondary">{secondary}</div>
        )}
      </div>
      
      {action && (
        <div className="list-action">
          {action}
        </div>
      )}
      
      {divider && <div className="list-divider" />}
    </li>
  );
};

// 列表组
export const ListGroup = ({
  title,
  children,
  collapsible = false,
  defaultExpanded = true,
  className = ''
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  return (
    <div className={`list-group ${className}`}>
      {title && (
        <div 
          className={`list-group-header ${collapsible ? 'collapsible' : ''}`}
          onClick={() => collapsible && setExpanded(!expanded)}
        >
          <h3 className="group-title">{title}</h3>
          {collapsible && (
            <Icon 
              name="expand_more" 
              className={`group-icon ${expanded ? 'expanded' : ''}`} 
            />
          )}
        </div>
      )}
      
      <div className={`list-group-content ${expanded ? 'expanded' : ''}`}>
        {children}
      </div>
    </div>
  );
}; 