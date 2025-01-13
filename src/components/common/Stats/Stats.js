import React from 'react';
import './Stats.css';

const Stats = ({ items }) => {
  return (
    <div className="stats-grid">
      {items.map((item, index) => (
        <div key={index} className="stat-item">
          <div className="stat-number">{item.number}</div>
          <div className="stat-label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats; 