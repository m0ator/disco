import React from 'react';
import './Grid.css';

const Grid = ({ 
  children, 
  className = '', 
  columns = 1,
  gap = 'default',
  alignItems = 'stretch',
  justifyContent = 'start'
}) => {
  const gridClass = `
    grid
    grid-cols-${columns}
    gap-${gap}
    align-${alignItems}
    justify-${justifyContent}
    ${className}
  `.trim();

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default Grid; 