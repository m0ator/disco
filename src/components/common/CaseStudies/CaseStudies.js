import React, { useState, useEffect } from 'react';
import Icon from '../Icon/Icon';
import './CaseStudies.css';

const CaseStudies = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState('finance');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'finance', name: '金融行业' },
    { id: 'education', name: '教育行业' },
    { id: 'medical', name: '医疗行业' },
    { id: 'retail', name: '零售行业' },
    { id: 'manufacture', name: '制造行业' }
  ];

  const filteredItems = items.filter(item => item.category === activeCategory);

  return (
    <div className="case-studies">
      <div className="case-filter">
        {categories.map(category => (
          <div
            key={category.id}
            className={`filter-item ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      
      <div className={`case-grid ${isVisible ? 'visible' : ''}`}>
        {filteredItems.map((item, index) => (
          <div key={index} className="case-card">
            <div className="case-media">
              <div className="case-image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
            <div className="case-content">
              <div className="case-meta">
                <span className="case-category">{item.industry}</span>
                <div className="case-stats">
                  <Icon name="trending_up" />
                  <span>成功案例</span>
                </div>
              </div>
              <h3 className="case-title">{item.title}</h3>
              <p className="case-description">{item.description}</p>
              <div className="case-results">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="result-item">
                    <Icon name="check_circle" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies; 