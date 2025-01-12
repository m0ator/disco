import React from 'react';
import './Container.css';

const Container = ({ 
  children, 
  className = '', 
  size = 'default',
  fluid = false 
}) => {
  const containerClass = `
    container 
    ${fluid ? 'container-fluid' : ''} 
    container-${size}
    ${className}
  `.trim();

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

export default Container; 