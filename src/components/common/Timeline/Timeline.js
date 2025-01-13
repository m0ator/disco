import React from 'react';
import './Timeline.css';

export const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-content">
            <h3 className="timeline-title" style={{ fontWeight: 'bold' }}>
              {item.title}
            </h3>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const TimelineItem = ({ year, title, description }) => (
  <div className="timeline-item">
    <div className="timeline-year">{year}</div>
    <div className="timeline-content">
      <h3 className="timeline-title">{title}</h3>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
); 