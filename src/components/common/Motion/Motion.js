import React from 'react';
import './Motion.css';

const Motion = ({ 
  children, 
  className = '',
  animation = 'fade',
  duration = 'normal',
  delay = 0,
  once = true
}) => {
  const [isVisible, setIsVisible] = React.useState(!once);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    if (!once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [once]);

  const motionClass = `
    motion
    motion-${animation}
    duration-${duration}
    ${isVisible ? 'is-visible' : ''}
    ${className}
  `.trim();

  const style = {
    '--motion-delay': `${delay}ms`
  };

  return (
    <div ref={elementRef} className={motionClass} style={style}>
      {children}
    </div>
  );
};

export default Motion; 