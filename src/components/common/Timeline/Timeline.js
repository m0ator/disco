import React from 'react';
import { Icon } from '../Icon/Icon';
import './Timeline.css';

export const Timeline = ({
  children,
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`timeline timeline-${align} ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isLast: index === React.Children.count(children) - 1
          });
        }
        return child;
      })}
    </div>
  );
};

export const TimelineItem = ({
  title,
  description,
  time,
  icon,
  color = 'primary',
  isLast = false,
  className = ''
}) => {
  return (
    <div 
      className={`
        timeline-item
        timeline-${color}
        ${isLast ? 'timeline-last' : ''}
        ${className}
      `}
    >
      <div className="timeline-indicator">
        <div className="timeline-dot">
          {icon && <Icon name={icon} className="timeline-icon" />}
        </div>
        {!isLast && <div className="timeline-line" />}
      </div>

      <div className="timeline-content">
        <div className="timeline-header">
          <h3 className="timeline-title">{title}</h3>
          {time && <time className="timeline-time">{time}</time>}
        </div>
        {description && (
          <div className="timeline-description">{description}</div>
        )}
      </div>
    </div>
  );
}; 