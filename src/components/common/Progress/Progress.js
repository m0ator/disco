import React from 'react';
import './Progress.css';

export const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  animated = false,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`progress-container ${className}`}>
      <div 
        className={`
          progress-bar
          progress-${variant}
          progress-${size}
          ${animated ? 'progress-animated' : ''}
        `}
      >
        <div 
          className="progress-value"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="progress-label">{Math.round(percentage)}%</span>
      )}
    </div>
  );
};

export const CircularProgress = ({
  value = 0,
  max = 100,
  size = 48,
  strokeWidth = 4,
  variant = 'primary',
  showLabel = false,
  className = ''
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`circular-progress ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={`circular-${variant}`}
      >
        <circle
          className="circular-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="circular-value"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      {showLabel && (
        <span className="circular-label">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};

export const LinearProgress = ({
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  return (
    <div 
      className={`
        linear-progress
        linear-${variant}
        linear-${size}
        ${className}
      `}
    >
      <div className="linear-value" />
    </div>
  );
}; 