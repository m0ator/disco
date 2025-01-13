import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import './Stories.css';

const Stories = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [visibleCount, setVisibleCount] = useState(3);
  
  const featuredStory = {
    id: 'featured-001',
    category: '特别报道',
    title: '科技创新的下一个十年',
    description: '展望未来十年，探索科技创新将如何继续改变我们的生活和工作方式。',
    image: 'https://www.microswift.top/halo/12/gwbguagn.jpg'
  };

  const stories = [
    {
      id: 'story-001',
      category: '创新',
      title: '用技术改变世界',
      description: '探索我们如何通过创新技术解决全球性挑战。',
      image: '/images/stories/innovation.jpg',
      date: '2024-03-15',
      readTime: '5 分钟阅读'
    },
    {
      id: 'story-004',
      category: '创新',
      title: '人工智能的突破性进展',
      description: '深入了解AI领域的最新研究成果和应用场景。',
      image: '/images/stories/ai.jpg',
      date: '2024-03-14',
      readTime: '7 分钟阅读'
    },
    {
      id: 'story-005',
      category: '创新',
      title: '量子计算：未来已来',
      description: '量子计算如何重塑计算机科学的未来发展。',
      image: '/images/stories/quantum.jpg',
      date: '2024-03-13',
      readTime: '6 分钟阅读'
    },
    {
      id: 'story-002',
      category: '可持续发展',
      title: '建设绿色未来',
      description: '了解我们在环境保护和可持续发展方面的努力。',
      image: '/images/stories/sustainability.jpg',
      date: '2024-03-10',
      readTime: '8 分钟阅读'
    },
    {
      id: 'story-006',
      category: '可持续发展',
      title: '零碳技术的创新之路',
      description: '探索前沿零碳技术如何助力实现碳中和目标。',
      image: '/images/stories/zero-carbon.jpg',
      date: '2024-03-09',
      readTime: '6 分钟阅读'
    },
    {
      id: 'story-007',
      category: '可持续发展',
      title: '循环经济与可持续设计',
      description: '如何通过创新设计理念推动循环经济发展。',
      image: '/images/stories/circular.jpg',
      date: '2024-03-08',
      readTime: '5 分钟阅读'
    },
    {
      id: 'story-008',
      category: '数字化转型',
      title: '企业数字化转型之路',
      description: '解析企业如何实现成功的数字化转型。',
      image: '/images/stories/digital-transform.jpg',
      date: '2024-03-07',
      readTime: '7 分钟阅读'
    },
    {
      id: 'story-009',
      category: '数字化转型',
      title: '云原生技术的演进',
      description: '探讨云原生技术如何改变软件开发模式。',
      image: '/images/stories/cloud-native.jpg',
      date: '2024-03-06',
      readTime: '6 分钟阅读'
    },
    {
      id: 'story-010',
      category: '人工智能',
      title: 'AI驱动的智能决策',
      description: '人工智能如何助力企业实现智能化决策。',
      image: '/images/stories/ai-decision.jpg',
      date: '2024-03-04',
      readTime: '8 分钟阅读'
    },
    {
      id: 'story-011',
      category: '人工智能',
      title: '机器学习的工业应用',
      description: '机器学习技术在工业领域的创新应用案例。',
      image: '/images/stories/ml-industry.jpg',
      date: '2024-03-03',
      readTime: '6 分钟阅读'
    },
    {
      id: 'story-003',
      category: '社会责任',
      title: '科技普惠大众',
      description: '探索我们如何让技术惠及更多人群。',
      image: '/images/stories/accessibility.jpg',
      date: '2024-03-05',
      readTime: '6 分钟阅读'
    },
    {
      id: 'story-012',
      category: '智慧城市',
      title: '智慧交通的未来',
      description: '智能交通系统如何改善城市出行体验。',
      image: '/images/stories/smart-transport.jpg',
      date: '2024-03-02',
      readTime: '5 分钟阅读'
    },
    {
      id: 'story-013',
      category: '智慧城市',
      title: '数字孪生与城市规划',
      description: '数字孪生技术在现代城市规划中的应用。',
      image: '/images/stories/digital-twin.jpg',
      date: '2024-03-01',
      readTime: '7 分钟阅读'
    }
  ];

  const categories = [
    { name: '全部', icon: 'grid_view', count: stories.length },
    { name: '创新', icon: 'lightbulb', count: stories.filter(s => s.category === '创新').length },
    { name: '可持续发展', icon: 'eco', count: stories.filter(s => s.category === '可持续发展').length },
    { name: '数字化转型', icon: 'devices', count: stories.filter(s => s.category === '数字化转型').length },
    { name: '人工智能', icon: 'smart_toy', count: stories.filter(s => s.category === '人工智能').length },
    { name: '智慧城市', icon: 'location_city', count: stories.filter(s => s.category === '智慧城市').length }
  ];

  const filteredStories = useMemo(() => {
    const filtered = activeCategory === '全部' 
      ? stories 
      : stories.filter(story => story.category === activeCategory);
    return filtered.slice(0, visibleCount);
  }, [activeCategory, stories, visibleCount]);

  const hasMore = useMemo(() => {
    const totalCount = activeCategory === '全部'
      ? stories.length
      : stories.filter(story => story.category === activeCategory).length;
    return visibleCount < totalCount;
  }, [activeCategory, stories, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const StoryCard = ({ story }) => (
    <Link to={`/stories/${story.id}`} className="story-card">
      <div className="story-content">
        <span className="story-category">{story.category}</span>
        <h3 className="story-title">{story.title}</h3>
        <p className="story-description">{story.description}</p>
        <div className="story-meta">
          <time className="story-date">
            <Icon name="calendar_today" />
            {story.date}
          </time>
          <span className="story-read-time">
            <Icon name="schedule" />
            {story.readTime}
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="stories-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">我们的故事</h1>
          <p className="hero-subtitle">
            技术<span className="highlight-blue">最美好的</span>地方在于，
            <span className="highlight-red">让我们看到</span>世界
            <span className="highlight-yellow">因此</span>而
            <span className="highlight-green">变得更美好。</span>
          </p>
        </div>
      </section>

      <section className="search-section">
        <div className="container">
          <SearchBar 
            placeholder="搜索故事..." 
            onSearch={(value) => console.log('Search:', value)}
          />
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="categories-list">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.name === activeCategory ? 'primary' : 'secondary'}
                className="category-button"
                onClick={() => handleCategoryClick(category.name)}
              >
                <Icon name={category.icon} />
                <span className="category-name">{category.name}</span>
                <span className="category-count">{category.count}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="featured-story">
            <div className="featured-image">
              <img src={featuredStory.image} alt={featuredStory.title} />
            </div>
            <div className="featured-content">
              <span className="story-category">{featuredStory.category}</span>
              <h2 className="featured-title">{featuredStory.title}</h2>
              <p className="featured-description">
                {featuredStory.description}
              </p>
              <Link to={`/stories/${featuredStory.id}`}>
                <Button variant="primary" size="large">
                  阅读更多
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stories-section">
        <div className="container">
          <div className="stories-grid">
            {filteredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          
          {hasMore && (
            <div className="stories-load-more">
              <Button 
                variant="secondary" 
                size="large"
                onClick={handleLoadMore}
              >
                加载更多
              </Button>
            </div>
          )}
        </div>
      </section>

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
              <Button variant="primary">订阅</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories; 