import React from 'react';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import './Integrity.css';

const Integrity = () => {
  return (
    <div className="integrity-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            诚信与透明
          </h1>
          <p className="hero-subtitle">
            我们勤于以负责任的方式开展业务，赢得并保持用户的信任，推动可持续发展
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section id="ethics" className="principles-section">
        <div className="container">
          <h2 className="section-title">我们的原则</h2>
          <div className="principles-grid">
            {[
              {
                icon: 'shield',
                title: '保护用户隐私',
                description: '我们采用业界领先的安全措施，保护用户数据安全。'
              },
              {
                icon: 'verified',
                title: '内容真实性',
                description: '我们致力于打击虚假信息，确保内容的真实可靠。'
              },
              {
                icon: 'balance',
                title: '公平竞争',
                description: '我们支持开放和公平的市场环境，促进良性竞争。'
              }
            ].map((principle, index) => (
              <div key={index} className="principle-card">
                <div className="principle-icon">
                  <Icon name={principle.icon} />
                </div>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-description">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section id="compliance" className="commitment-section">
        <div className="container">
          <div className="commitment-content">
            <div className="commitment-text">
              <h2 className="section-title">我们的承诺</h2>
              <p className="commitment-description">
                我们承诺以最高的道德标准开展业务，并持续改进我们的实践。
              </p>
              <ul className="commitment-list">
                <li>透明度报告</li>
                <li>数据安全</li>
                <li>用户隐私</li>
                <li>算法公平</li>
              </ul>
              <Button variant="primary">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="reports-section">
        <div className="container">
          <h2 className="section-title">透明度报告</h2>
          <div className="reports-grid">
            {[
              {
                title: '2023年透明度报告',
                description: '了解我们如何保护用户数据和维护平台安全。',
                date: '2023年12月'
              },
              {
                title: '隐私和安全白皮书',
                description: '详细了解我们的数据保护措施和安全实践。',
                date: '2023年9月'
              }
            ].map((report, index) => (
              <div key={index} className="report-card">
                <div className="report-content">
                  <h3 className="report-title">{report.title}</h3>
                  <p className="report-description">{report.description}</p>
                  <span className="report-date">{report.date}</span>
                </div>
                <Button variant="secondary">
                  查看报告
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">共同维护诚信环境</h2>
          <p className="cta-description">
            了解更多关于我们的诚信建设工作，或向我们报告问题
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="large">
              了解更多
            </Button>
            <Button variant="secondary" size="large">
              报告问题
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrity; 