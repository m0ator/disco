import React from 'react';
import './Badge.css';

export const Badge = ({
  children,
  content,
  max = 99,
  dot = false,
  color = 'primary',
  variant = 'standard',
  overlap = false,
  horizontal = 'right',
  vertical = 'top',
  className = '',
  ...props
}) => {
  const badgeContent = dot ? null : (
    typeof content === 'number' && content > max ? 
      `${max}+` : content
  );

  return (
    <div 
      className={`
        badge-wrapper
        badge-${horizontal}
        badge-${vertical}
        ${overlap ? 'badge-overlap' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
      <span 
        className={`
          badge
          badge-${variant}
          badge-${color}
          ${dot ? 'badge-dot' : ''}
        `}
      >
        {badgeContent}
      </span>
    </div>
  );
}; 