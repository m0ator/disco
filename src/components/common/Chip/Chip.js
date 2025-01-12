import React from 'react';
import { Icon } from '../Icon/Icon';
import './Chip.css';

export const Chip = ({
  label,
  icon,
  avatar,
  onDelete,
  variant = 'default',
  size = 'md',
  color = 'default',
  clickable = false,
  selected = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`
        chip
        chip-${variant}
        chip-${size}
        chip-${color}
        ${clickable ? 'chip-clickable' : ''}
        ${selected ? 'chip-selected' : ''}
        ${className}
      `}
      {...props}
    >
      {avatar && (
        <div className="chip-avatar">
          <img src={avatar} alt={label} />
        </div>
      )}
      
      {icon && !avatar && (
        <Icon name={icon} className="chip-icon" />
      )}
      
      <span className="chip-label">{label}</span>
      
      {onDelete && (
        <button 
          type="button" 
          className="chip-delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Icon name="close" />
        </button>
      )}
    </div>
  );
};

// 过滤器组
export const ChipGroup = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  return (
    <div className={`chip-group ${className}`}>
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
    </div>
  );
}; 