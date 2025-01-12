import React from 'react';
import Icon from '../Icon/Icon';
import './Button.css';

const Button = ({ 
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button'
}) => {
  const buttonClass = `
    button
    button-${variant}
    button-${size}
    ${fullWidth ? 'button-full' : ''}
    ${loading ? 'button-loading' : ''}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <span className="button-spinner" />}
      {icon && iconPosition === 'left' && (
        <Icon name={icon} size={size} className="button-icon-left" />
      )}
      <span className="button-content">{children}</span>
      {icon && iconPosition === 'right' && (
        <Icon name={icon} size={size} className="button-icon-right" />
      )}
    </button>
  );
};

export default Button; 