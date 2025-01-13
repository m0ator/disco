import React from 'react';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section id="mission" className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            我们的<span className="highlight-yellow">使命是</span><br />通过
            <span className="highlight-blue">优质的</span>服务，
            服务<span className="highlight-green">大众</span>，
            <span className="highlight-red">让人人受益</span>
          </h1>
          <p className="hero-subtitle">
            从之初到现在，我们始终致力于改善人们享受服务的方式
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="values-section">
        <div className="container">
          <h2 className="section-title">我们的价值观</h2>
          <div className="values-grid">
            {[
              {
                icon: 'lightbulb',
                title: '以用户为中心',
                description: '我们的产品和服务始终以用户需求为导向，致力于为用户创造价值。'
              },
              {
                icon: 'trending_up',
                title: '持续创新',
                description: '我们不断探索新技术，推动行业发展，为用户带来更好的体验。'
              },
              {
                icon: 'handshake',
                title: '诚信正直',
                description: '我们坚持诚信经营，遵守商业道德，赢得用户和合作伙伴的信任。'
              }
            ].map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <Icon name={value.icon} />
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <h2 className="section-title">发展历程</h2>
          <div className="timeline">
            {[
              {
                year: '2020',
                title: '全新里程碑',
                description: '公司创建进入新阶段，推出多项创新产品和服务。'
              },
              {
                year: '2015',
                title: '业务扩张',
                description: '业务版图不断扩大，服务范围覆盖全球多个国家和地区。'
              },
              {
                year: '2022',
                title: '疫情阶段',
                description: '难上加难，开始专注于技术创新和产品研发。'
              },
              {
                year: '2024',
                title: '业务转型',
                description: '同时进行多项测试与开展多项优惠政策'
              },
              {
                year: '2025',
                title: '努力创新',
                description: '预算更多的投入，创新更多产品'
              }
            ].map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <div className="container">
          <h2 className="section-title">企业文化</h2>
          <div className="culture-grid">
            {[
              {
                icon: 'psychology',
                title: '创新思维',
                description: '我们鼓励创新思维，不断探索新的可能性，推动技术和服务的进步。',
                color: 'blue'
              },
              {
                icon: 'diversity_3',
                title: '团队协作',
                description: '我们重视团队合作，相信通过协作能够创造更大的价值。',
                color: 'green'
              },
              {
                icon: 'workspace_premium',
                title: '追求卓越',
                description: '我们始终追求卓越，为客户提供最优质的服务和解决方案。',
                color: 'yellow'
              },
              {
                icon: 'volunteer_activism',
                title: '责任担当',
                description: '我们勇于承担社会责任，致力于为社会创造积极的影响。',
                color: 'red'
              }
            ].map((culture, index) => (
              <div key={index} className={`culture-card culture-${culture.color}`}>
                <div className="culture-icon">
                  <Icon name={culture.icon} />
                </div>
                <div className="culture-content">
                  <h3 className="culture-title">{culture.title}</h3>
                  <p className="culture-description">{culture.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">加入我们，共创未来</h2>
          <p className="cta-description">
            我们正在寻找优秀的人才加入团队，一起实现改变世界的梦想
          </p>
          <Button variant="primary" size="large">
            查看职位空缺
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About; 