import React from 'react';
import './Icon.css';

export const Icon = ({ name, className = '', ...props }) => {
  return (
    <span 
      className={`material-icons ${className}`} 
      {...props}
    >
      {name}
    </span>
  );
};

export default Icon; 