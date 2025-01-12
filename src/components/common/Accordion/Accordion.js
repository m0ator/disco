import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import './Accordion.css';

export const Accordion = ({ 
  children,
  defaultExpanded = false,
  className = ''
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className={`accordion ${expanded ? 'expanded' : ''} ${className}`}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            expanded,
            setExpanded,
            contentHeight
          });
        }
        return child;
      })}
    </div>
  );
};

export const AccordionHeader = ({ 
  children,
  expanded,
  setExpanded,
  className = ''
}) => {
  return (
    <button 
      className={`accordion-header ${className}`}
      onClick={() => setExpanded(!expanded)}
      aria-expanded={expanded}
    >
      <div className="header-content">{children}</div>
      <Icon 
        name="chevron_down" 
        className={`header-icon ${expanded ? 'expanded' : ''}`} 
      />
    </button>
  );
};

export const AccordionContent = ({ 
  children,
  expanded,
  contentHeight,
  className = ''
}) => {
  const contentRef = useRef(null);

  return (
    <div 
      ref={contentRef}
      className={`accordion-content ${className}`}
      style={{ 
        height: expanded ? contentHeight : 0,
        visibility: expanded ? 'visible' : 'hidden'
      }}
    >
      <div className="content-inner">
        {children}
      </div>
    </div>
  );
};

// 手风琴组
export const AccordionGroup = ({ 
  children,
  allowMultiple = false,
  className = ''
}) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setExpandedItems(prev => 
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setExpandedItems(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={`accordion-group ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            expanded: expandedItems.includes(index),
            onToggle: () => toggleItem(index)
          });
        }
        return child;
      })}
    </div>
  );
}; 