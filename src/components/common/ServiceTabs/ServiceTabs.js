import React, { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './ServiceTabs.css';

const ServiceTabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [activeTab]);

  const handleTabChange = (index) => {
    setIsVisible(false);
    setTimeout(() => {
      setActiveTab(index);
    }, 300);
  };

  return (
    <div className="service-tabs">
      <div className="tabs-sidebar">
        {items.map((item, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            <Icon name={item.icon} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">
        <div className={`service-card ${isVisible ? 'visible' : ''}`}>
          <div className="service-header">
            <div className="service-icon">
              <Icon name={items[activeTab].icon} />
            </div>
            <h3>{items[activeTab].title}</h3>
          </div>
          <div className="service-description">
            {items[activeTab].description}
          </div>
          <div className="service-features">
            {items[activeTab].features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="service-price">
            <div className="price-tag">
              <span className="price-label">服务价格</span>
              <span className="price-value">{items[activeTab].price}</span>
            </div>
            <div className="service-time">
              <Icon name="schedule" />
              <span>预计服务时长：{items[activeTab].time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs; 