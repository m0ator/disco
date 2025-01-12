import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import './Rating.css';

export const Rating = ({
  value = 0,
  max = 5,
  precision = 1,
  size = 'md',
  readOnly = false,
  disabled = false,
  onChange,
  className = ''
}) => {
  const [hoverValue, setHoverValue] = useState(-1);
  
  const handleMouseMove = (event, index) => {
    if (readOnly || disabled) return;
    
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - left) / width;
    const value = index + percent;
    const snapped = Math.round(value / precision) * precision;
    const bounded = Math.min(Math.max(snapped, 0), max);
    
    setHoverValue(bounded);
  };
  
  const handleMouseLeave = () => {
    setHoverValue(-1);
  };
  
  const handleClick = (event, index) => {
    if (readOnly || disabled) return;
    
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const percent = (event.clientX - left) / width;
    const value = index + percent;
    const snapped = Math.round(value / precision) * precision;
    const bounded = Math.min(Math.max(snapped, 0), max);
    
    onChange?.(bounded);
  };

  return (
    <div 
      className={`
        rating
        rating-${size}
        ${disabled ? 'rating-disabled' : ''}
        ${className}
      `}
    >
      {[...Array(max)].map((_, index) => {
        const filled = (hoverValue >= 0 ? hoverValue : value) - index;
        
        return (
          <span
            key={index}
            className="rating-item"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick(e, index)}
          >
            <Icon 
              name={filled >= 1 ? 'star' : filled > 0 ? 'star_half' : 'star_border'}
              className="rating-icon"
            />
          </span>
        );
      })}
    </div>
  );
}; 