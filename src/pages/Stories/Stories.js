import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import './Stories.css';

const Stories = () => {
  const stories = [
    {
      id: 1,
      category: '创新',
      title: '用技术改变世界',
      description: '探索我们如何通过创新技术解决全球性挑战。',
      image: '/images/stories/innovation.jpg',
      date: '2024-03-15'
    },
    {
      id: 2,
      category: '可持续发展',
      title: '建设绿色未来',
      description: '了解我们在环境保护和可持续发展方面的努力。',
      image: '/images/stories/sustainability.jpg',
      date: '2024-03-10'
    },
    {
      id: 3,
      category: '社会责任',
      title: '科技普惠大众',
      description: '探索我们如何让技术惠及更多人群。',
      image: '/images/stories/accessibility.jpg',
      date: '2024-03-05'
    }
  ];

  const categories = [
    { name: '全部', icon: 'grid_view' },
    { name: '创新', icon: 'lightbulb' },
    { name: '可持续发展', icon: 'eco' },
    { name: '社会责任', icon: 'diversity_3' }
  ];

  return (
    <div className="stories-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            我们的故事
          </h1>
          <p className="hero-subtitle">
           技术最美好的地方在于，让我们看到世界因此而变得更美好。
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-list">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'primary' : 'secondary'}
                className="category-button"
              >
                <Icon name={category.icon} />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-story">
            <div className="featured-image">
              <img src="/images/stories/featured.jpg" alt="Featured Story" />
            </div>
            <div className="featured-content">
              <span className="story-category">特别报道</span>
              <h2 className="featured-title">
                科技创新的下一个十年
              </h2>
              <p className="featured-description">
                展望未来十年，探索科技创新将如何继续改变我们的生活和工作方式。
              </p>
              <Button variant="primary" size="large">
                阅读更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="stories-section">
        <div className="container">
          <div className="stories-grid">
            {stories.map((story) => (
              <Link
                to={`/stories/${story.id}`}
                key={story.id}
                className="story-card"
              >
                <div className="story-image">
                  <img src={story.image} alt={story.title} />
                  <span className="story-category">{story.category}</span>
                </div>
                <div className="story-content">
                  <h3 className="story-title">{story.title}</h3>
                  <p className="story-description">{story.description}</p>
                  <span className="story-date">{story.date}</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="stories-load-more">
            <Button variant="secondary" size="large">
              加载更多
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="section-title">订阅我们的故事</h2>
            <p className="newsletter-description">
              及时了解我们的最新动态和精彩故事
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="newsletter-input"
              />
              <Button variant="primary">
                订阅
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories; 