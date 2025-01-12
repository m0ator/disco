import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import './Card.css';

export const Card = ({ 
  children,
  variant = 'default',
  className = '',
  ...props 
}) => {
  return (
    <div className={`card card-${variant} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardMedia = ({ 
  src,
  alt = '',
  aspectRatio = '16/9',
  className = ''
}) => {
  return (
    <div 
      className={`card-media ${className}`}
      style={{ '--aspect-ratio': aspectRatio }}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export const CardContent = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

export const CardActions = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`card-actions ${className}`}>
      {children}
    </div>
  );
};

// 特殊卡片组件
export const FeatureCard = ({
  icon,
  title,
  description,
  link,
  className = ''
}) => {
  const content = (
    <Card variant="feature" className={className}>
      <div className="feature-icon">
        <Icon name={icon} />
      </div>
      <CardContent>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </CardContent>
      <CardActions>
        <Icon name="arrow_right" className="feature-arrow" />
      </CardActions>
    </Card>
  );

  return link ? (
    <Link to={link} className="feature-link">
      {content}
    </Link>
  ) : content;
};

export const StatCard = ({
  value,
  label,
  trend,
  className = ''
}) => {
  return (
    <Card variant="stat" className={className}>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {trend && (
        <div className={`stat-trend ${trend > 0 ? 'positive' : 'negative'}`}>
          <Icon name={trend > 0 ? 'trending_up' : 'trending_down'} />
          <span>{Math.abs(trend)}%</span>
        </div>
      )}
    </Card>
  );
};

export const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  className = ''
}) => {
  return (
    <Card variant="testimonial" className={className}>
      <div className="testimonial-quote">{quote}</div>
      <div className="testimonial-author">
        {avatar && (
          <img 
            src={avatar} 
            alt={author} 
            className="testimonial-avatar" 
          />
        )}
        <div className="testimonial-info">
          <div className="testimonial-name">{author}</div>
          <div className="testimonial-role">{role}</div>
        </div>
      </div>
    </Card>
  );
}; 