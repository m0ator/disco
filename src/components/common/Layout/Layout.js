import React from 'react';
import './Layout.css';

export const Stack = ({ 
  children, 
  className = '',
  direction = 'column',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false
}) => {
  const stackClass = `
    stack
    stack-${direction}
    spacing-${spacing}
    align-${align}
    justify-${justify}
    ${wrap ? 'stack-wrap' : ''}
    ${className}
  `.trim();

  return (
    <div className={stackClass}>
      {children}
    </div>
  );
};

export const Flex = ({
  children,
  className = '',
  align = 'center',
  justify = 'start',
  gap = 'md',
  wrap = false
}) => {
  const flexClass = `
    flex
    align-${align}
    justify-${justify}
    gap-${gap}
    ${wrap ? 'flex-wrap' : ''}
    ${className}
  `.trim();

  return (
    <div className={flexClass}>
      {children}
    </div>
  );
};

export const Divider = ({
  className = '',
  orientation = 'horizontal',
  spacing = 'md'
}) => {
  const dividerClass = `
    divider
    divider-${orientation}
    spacing-${spacing}
    ${className}
  `.trim();

  return <div className={dividerClass} />;
}; 