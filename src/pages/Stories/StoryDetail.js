import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import './StoryDetail.css';

const StoryDetail = () => {
  const { id } = useParams();

  // 模拟故事数据
  const story = {
    id,
    category: '创新',
    title: '用技术改变世界',
    date: '2024-03-15',
    author: '张明',
    authorTitle: '技术总监',
    coverImage: '/images/stories/innovation.jpg',
    content: `
      <p>在这个快速发展的数字时代，技术创新正在以前所未有的速度改变着我们的生活方式。</p>
      
      <h2>引领变革</h2>
      <p>我们始终致力于通过技术创新来解决全球性挑战。从人工智能到可再生能源，从数字化转型到智能制造，我们正在各个领域推动技术进步。</p>
      
      <img src="/images/stories/innovation-detail.jpg" alt="创新技术" />
      
      <h2>未来展望</h2>
      <p>展望未来，我们将继续投资前沿技术，推动产业升级，为用户创造更多价值。通过持续创新，我们希望能够为建设更美好的世界贡献自己的力量。</p>
    `
  };

  // 相关故事
  const relatedStories = [
    {
      id: 2,
      title: '建设绿色未来',
      category: '可持续发展',
      image: '/images/stories/sustainability.jpg'
    },
    {
      id: 3,
      title: '科技普惠大众',
      category: '社会责任',
      image: '/images/stories/accessibility.jpg'
    }
  ];

  return (
    <div className="story-detail-page">
      {/* Hero Section */}
      <section className="story-hero">
        <div className="container">
          <div className="story-meta">
            <Link to="/stories" className="back-link">
              <Icon name="arrow_back" />
              返回故事列表
            </Link>
            <span className="story-category">{story.category}</span>
          </div>
          <h1 className="story-title">{story.title}</h1>
          <div className="story-info">
            <div className="author-info">
              <img src="/images/team/author.jpg" alt={story.author} className="author-avatar" />
              <div>
                <div className="author-name">{story.author}</div>
                <div className="author-title">{story.authorTitle}</div>
              </div>
            </div>
            <div className="publish-date">{story.date}</div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <div className="story-cover">
        <img src={story.coverImage} alt={story.title} />
      </div>

      {/* Content Section */}
      <section className="story-content">
        <div className="container">
          <div className="content-wrapper">
            <div 
              className="main-content"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />
            
            <div className="share-buttons">
              <Button variant="secondary">
                <Icon name="share" />
                分享
              </Button>
              <Button variant="secondary">
                <Icon name="bookmark" />
                收藏
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="related-stories">
        <div className="container">
          <h2 className="section-title">相关故事</h2>
          <div className="related-grid">
            {relatedStories.map((story) => (
              <Link 
                to={`/stories/${story.id}`}
                key={story.id}
                className="related-card"
              >
                <div className="related-image">
                  <img src={story.image} alt={story.title} />
                  <span className="story-category">{story.category}</span>
                </div>
                <h3 className="related-title">{story.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="story-cta">
        <div className="container">
          <h2 className="cta-title">探索更多故事</h2>
          <p className="cta-description">
            了解我们如何通过创新和合作来改变世界
          </p>
          <Link to="/stories">
            <Button variant="primary" size="large">
              查看全部故事
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StoryDetail;