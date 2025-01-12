import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '../Icon/Icon';
import './Carousel.css';

export const Carousel = ({
  items,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  effect = 'slide',
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const timerRef = useRef(null);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + items.length) % items.length);
  };

  const goTo = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(next, interval);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, interval]);

  return (
    <div 
      className={`
        carousel 
        carousel-${effect}
        ${className}
      `}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => autoPlay && setIsPlaying(true)}
    >
      <div 
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt || ''} />
            ) : (
              <video
                src={item.src}
                poster={item.poster}
                controls={item.controls}
                muted={item.muted}
                loop={item.loop}
              />
            )}
            {item.caption && (
              <div className="carousel-caption">
                <h3>{item.caption.title}</h3>
                <p>{item.caption.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button className="carousel-arrow arrow-prev" onClick={prev}>
            <Icon name="chevron_left" />
          </button>
          <button className="carousel-arrow arrow-next" onClick={next}>
            <Icon name="chevron_right" />
          </button>
        </>
      )}

      {showDots && (
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}

      <button className="carousel-play" onClick={togglePlay}>
        <Icon name={isPlaying ? 'pause' : 'play_arrow'} />
      </button>
    </div>
  );
};

export const CarouselItem = ({ children, className = '' }) => {
  return (
    <div className={`carousel-item ${className}`}>
      {children}
    </div>
  );
}; 