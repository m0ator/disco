import React from 'react';
import { Icon } from '../Icon/Icon';
import './Stepper.css';

export const Stepper = ({
  steps,
  activeStep = 0,
  orientation = 'horizontal',
  variant = 'default',
  className = ''
}) => {
  return (
    <div 
      className={`
        stepper 
        stepper-${orientation}
        stepper-${variant}
        ${className}
      `}
    >
      {steps.map((step, index) => {
        const isCompleted = index < activeStep;
        const isActive = index === activeStep;
        const isLast = index === steps.length - 1;

        return (
          <div 
            key={index}
            className={`
              step
              ${isCompleted ? 'step-completed' : ''}
              ${isActive ? 'step-active' : ''}
            `}
          >
            <div className="step-connector">
              {!isLast && <div className="connector-line" />}
            </div>

            <div className="step-content">
              <div className="step-indicator">
                {isCompleted ? (
                  <Icon name="check" className="step-icon" />
                ) : (
                  <span className="step-number">{index + 1}</span>
                )}
              </div>

              <div className="step-label">
                <div className="step-title">{step.title}</div>
                {step.description && (
                  <div className="step-description">{step.description}</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}; 