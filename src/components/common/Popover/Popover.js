import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Popover.css';

export const Popover = ({
  children,
  content,
  placement = 'bottom',
  trigger = 'click',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !popoverRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top = 0;
    let left = 0;

    switch (placement) {
      case 'top':
        top = triggerRect.top + scrollY - popoverRect.height - 8;
        left = triggerRect.left + scrollX + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + scrollY + 8;
        left = triggerRect.left + scrollX + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + scrollY + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.left + scrollX - popoverRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + scrollY + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.right + scrollX + 8;
        break;
      default:
        break;
    }

    setPosition({ top, left });
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      calculatePosition();
      window.addEventListener('scroll', calculatePosition);
      window.addEventListener('resize', calculatePosition);

      if (trigger === 'click') {
        const handleClickOutside = (event) => {
          if (
            triggerRef.current &&
            !triggerRef.current.contains(event.target) &&
            popoverRef.current &&
            !popoverRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }
    }

    return () => {
      window.removeEventListener('scroll', calculatePosition);
      window.removeEventListener('resize', calculatePosition);
    };
  }, [isOpen, trigger]);

  return (
    <>
      <div
        ref={triggerRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="popover-trigger"
      >
        {children}
      </div>
      {isOpen &&
        createPortal(
          <div
            ref={popoverRef}
            className={`popover popover-${placement} ${className}`}
            style={{
              top: position.top,
              left: position.left
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="popover-content">{content}</div>
          </div>,
          document.body
        )}
    </>
  );
}; 