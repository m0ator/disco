import React, { useState, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import './BackTop.css';

export const BackTop = ({
  visibilityHeight = 400,
  duration = 450,
  target,
  icon = 'arrow_upward',
  className = ''
}) => {
  const [visible, setVisible] = useState(false);

  const getTarget = () => {
    if (target) {
      return typeof target === 'function' ? target() : target;
    }
    return window;
  };

  const handleScroll = () => {
    const targetElement = getTarget();
    const scrollTop = targetElement === window 
      ? document.documentElement.scrollTop
      : targetElement.scrollTop;
    
    setVisible(scrollTop > visibilityHeight);
  };

  const scrollToTop = () => {
    const targetElement = getTarget();
    const scrollTop = targetElement === window
      ? document.documentElement.scrollTop
      : targetElement.scrollTop;
    
    const startTime = Date.now();
    
    const scroll = () => {
      const timeElapsed = Date.now() - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // 使用缓动函数使滚动更自然
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const position = scrollTop * (1 - easeProgress);
      
      if (targetElement === window) {
        window.scrollTo(0, position);
      } else {
        targetElement.scrollTop = position;
      }
      
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
    
    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const targetElement = getTarget();
    const handleScroll = () => {
      // ...
    };
    
    targetElement.addEventListener('scroll', handleScroll);
    return () => targetElement.removeEventListener('scroll', handleScroll);
  }, [getTarget]);

  if (!visible) return null;

  return (
    <button
      className={`back-top ${className}`}
      onClick={scrollToTop}
      aria-label="回到顶部"
    >
      <Icon name={icon} />
    </button>
  );
}; 