import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { Modal } from '../Modal/Modal';
import './ImageGallery.css';

export const ImageGallery = ({ 
  images,
  columns = 3,
  gap = 'md',
  className = ''
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div 
        className={`gallery gallery-columns-${columns} gallery-gap-${gap} ${className}`}
      >
        {images.map((image, index) => (
          <div 
            key={index}
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
          >
            <img 
              src={image.thumbnail || image.src} 
              alt={image.alt || ''} 
              className="gallery-image"
            />
            {image.caption && (
              <div className="gallery-caption">
                <p>{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <ImageViewer
          images={images}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </>
  );
};

const ImageViewer = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <Modal isOpen onClose={onClose} size="lg" className="image-viewer-modal">
      <div className="image-viewer">
        <button className="viewer-close" onClick={onClose}>
          <Icon name="close" />
        </button>
        
        <button className="viewer-nav viewer-prev" onClick={prev}>
          <Icon name="chevron_left" />
        </button>
        
        <div className="viewer-content">
          <img 
            src={currentImage.src} 
            alt={currentImage.alt || ''} 
            className="viewer-image"
          />
          {currentImage.caption && (
            <div className="viewer-caption">
              <p>{currentImage.caption}</p>
            </div>
          )}
        </div>
        
        <button className="viewer-nav viewer-next" onClick={next}>
          <Icon name="chevron_right" />
        </button>

        <div className="viewer-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </Modal>
  );
}; 