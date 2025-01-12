import React from 'react';
import './Text.css';

const Text = ({ 
  children, 
  className = '',
  variant = 'body',
  color = 'primary',
  weight = 'normal',
  align = 'left',
  as: Component = 'p'
}) => {
  const textClass = `
    text
    text-${variant}
    text-${color}
    weight-${weight}
    align-${align}
    ${className}
  `.trim();

  return (
    <Component className={textClass}>
      {children}
    </Component>
  );
};

export default Text; 