import React from 'react';
import classNames from '../classnames';
import './Card.css';

export const Card = ({ children, className, hover, ...props }) => {
  return (
    <div 
      className={classNames('card', className, {
        'card-hover': hover
      })} 
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className, ...props }) => (
  <div className={classNames('card-content', className)} {...props}>
    {children}
  </div>
);

export const CardMedia = ({ src, alt, className, ...props }) => (
  <div className={classNames('card-media', className)} {...props}>
    <img src={src} alt={alt} />
  </div>
);

export const CardActions = ({ children, className, ...props }) => (
  <div className={classNames('card-actions', className)} {...props}>
    {children}
  </div>
); 