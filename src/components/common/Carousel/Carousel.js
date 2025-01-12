import React, { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './Carousel.css';

const Carousel = ({ images, autoPlayInterval = 3000, showDots = true, showArrows = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoPlayInterval);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, autoPlayInterval]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div 
      className="carousel" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img src={image.url} alt={image.alt || `Slide ${index + 1}`} />
            <div className="carousel-content">
              {image.title && <h2 className="carousel-title">{image.title}</h2>}
              {image.subtitle && <h3 className="carousel-subtitle">{image.subtitle}</h3>}
              {image.description && <p className="carousel-description">{image.description}</p>}
            </div>
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button 
            className="carousel-button prev" 
            onClick={handlePrevious}
            aria-label="Previous slide"
          >
            <Icon name="chevron_left" />
          </button>
          <button 
            className="carousel-button next" 
            onClick={handleNext}
            aria-label="Next slide"
          >
            <Icon name="chevron_right" />
          </button>
        </>
      )}

      {showDots && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel; 