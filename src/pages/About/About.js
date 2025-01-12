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
            我们的使命是<br />
            整合与发布信息，让人人都能获取和使用
          </h1>
          <p className="hero-subtitle">
            从创立之初到现在，我们始终致力于改善人们获取服务的方式
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

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title">WE TEAM</h2>
          <div className="team-grid">
            {[
              {
                image: '/images/team/ceo.jpg',
                name: '祁虹安',
                title: 'CEO',
                description: '拥有7年科技行业经验，致力于推动公司创新发展。'
              },
              {
                image: '/images/team/cto.jpg',
                name: '李纨',
                title: '技术官',
                description: '技术专家，负责公司技术战略和产品研发。'
              },
              {
                image: '/images/team/cfo.jpg',
                name: '京墨',
                title: '安全专家',
                description: '安全专家，负责公司安全策略和风险管理。'
              }
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  <p className="member-description">{member.description}</p>
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