import React from 'react';
import { Section } from '../../components/common';
import Button from '../../components/common/Button/Button';
import Icon from '../../components/common/Icon/Icon';
import './Products.css';

const Products = () => {
  const products = {
    manufacturing: {
      title: '技术社区平台',
      description: '可开放，可私有，可定制',
      image: 'https://www.microswift.top/halo/05/gbymherp.webp',
      features: [
        '人人可用',
        '无需编程',
        '结构简单',
        '成本低廉',
        '界面美观',
        '功能强大'
      ],
      details: [
        {
          icon: 'precision_manufacturing',
          title: '优化管理',
          description: '实时监控成员状态，作用权限，提高安全'
        },
        {
          icon: 'analytics',
          title: '全文摘要，AI对话',
          description: '接入ChatGPT，实现全文摘要，AI对话'
        },
        {
          icon: 'inventory_2',
          title: '人人可用',
          description: '人人可用，无需编程，人人可用'
        }
      ]
    },
    analytics: {
      title: '极速网盘',
      description: '极速上传，极速下载，极速分享',
      image: 'https://www.microswift.top/halo/05/gbymherp.webp',
      features: [
        '多端同步',
        '极速下载',
        '极速分享',
        '极速存储',
        '方便管理',
        '极速安全'
      ],
      details: [
        {
          icon: 'query_stats',
          title: '极速上传',
          description: '高性能实时数据处理引擎，支持海量数据分析'
        },
        {
          icon: 'insights',
          title: '极速下载',
          description: '极速下载，极速分享'
        },
        {
          icon: 'donut_large',
          title: '多端可用',
          description: '多端可用，随时随地，随时随地'
        }
      ]
    }
  };

  const solutions = [
    {
      icon: 'architecture',
      title: '系统架构',
      description: '采用微服务架构，确保系统高可用性和可扩展性'
    },
    {
      icon: 'security',
      title: '安全保障',
      description: '多层次安全防护，保护数据和业务安全'
    },
    {
      icon: 'support',
      title: '技术支持',
      description: '7x24小时专业技术支持和运维服务'
    }
  ];

  const advantages = [
    {
      title: '技术创新',
      description: '持续投入研发，保持技术领先优势',
      icon: 'lightbulb'
    },
    {
      title: '行业经验',
      description: '深耕行业多年，积累丰富实践经验',
      icon: 'business'
    },
    {
      title: '服务保障',
      description: '完善的服务体系，确保项目顺利实施',
      icon: 'verified'
    }
  ];

  const cases = [
    {
      company: '技术社区',
      title: '效率提升40%',
      description: '通过部署智能制造解决方案，实现生产流程优化，显著提升效率',
      image: 'https://www.microswift.top/halo/06/case1.jpg',
      results: ['效率提升40%', '质量控制准确率99%', '运维成本降低30%']
    },
    {
      company: '影像、婚纱店',
      title: '方便、快捷、安全',
      description: '借助我们的云服务，实现极速上传，极速下载，极速分享',
      image: 'https://www.microswift.top/halo/06/case2.jpg',
      results: ['营销转化率提升35%', '周转率提升25%', '运营成本降低20%']
    }
  ];

  const features = [
    {
      icon: 'cloud_done',
      title: '云原生架构',
      description: '基于云原生技术栈，提供灵活可扩展的服务'
    },
    {
      icon: 'api',
      title: '开放API',
      description: '提供标准REST API，支持灵活的系统集成'
    },
    {
      icon: 'speed',
      title: '高性能',
      description: '优化的系统架构，确保高并发和低延迟'
    },
    {
      icon: 'security',
      title: '安全可靠',
      description: '多层安全防护，确保数据和业务安全'
    }
  ];

  return (
    <div className="products-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">产品方案</h1>
          <p className="hero-subtitle">为企业提供全方位的智能解决方案</p>
        </div>
      </section>

      <section id="manufacturing" className="products-section">
        <div className="container">
          <h2 className="section-title">智能制造解决方案</h2>
          <div className="product-hero">
            <div className="product-image">
              <img src={products.manufacturing.image} alt={products.manufacturing.title} />
            </div>
            <div className="product-overview">
              <h3 className="product-title">{products.manufacturing.title}</h3>
              <p className="product-description">{products.manufacturing.description}</p>
              <div className="product-features">
                {products.manufacturing.features.map((feature, i) => (
                  <div key={i} className="feature-tag">
                    <Icon name="check_circle" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="primary" size="large">了解详情</Button>
            </div>
          </div>
          <div className="product-details">
            {products.manufacturing.details.map((detail, index) => (
              <div key={index} className="detail-card">
                <div className="detail-icon">
                  <Icon name={detail.icon} />
                </div>
                <h4 className="detail-title">{detail.title}</h4>
                <p className="detail-description">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="analytics" className="products-section">
        <div className="container">
          <h2 className="section-title">数据分析平台</h2>
          <div className="product-hero">
            <div className="product-overview">
              <h3 className="product-title">{products.analytics.title}</h3>
              <p className="product-description">{products.analytics.description}</p>
              <div className="product-features">
                {products.analytics.features.map((feature, i) => (
                  <div key={i} className="feature-tag">
                    <Icon name="check_circle" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="primary" size="large">了解详情</Button>
            </div>
            <div className="product-image">
              <img src={products.analytics.image} alt={products.analytics.title} />
            </div>
          </div>
          <div className="product-details">
            {products.analytics.details.map((detail, index) => (
              <div key={index} className="detail-card">
                <div className="detail-icon">
                  <Icon name={detail.icon} />
                </div>
                <h4 className="detail-title">{detail.title}</h4>
                <p className="detail-description">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="solutions-section">
        <div className="container">
          <h2 className="section-title">解决方案优势</h2>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">
                  <Icon name={solution.icon} />
                </div>
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="advantages-section">
        <div className="container">
          <h2 className="section-title">为什么选择我们</h2>
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-card">
                <div className="advantage-icon">
                  <Icon name={advantage.icon} />
                </div>
                <div className="advantage-content">
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">核心技术特点</h2>
          <p className="section-subtitle">
            采用先进技术架构，为企业提供可靠的技术保障
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cases-section">
        <div className="container">
          <h2 className="section-title">成功案例</h2>
          <p className="section-subtitle">
            了解我们如何帮助客户实现业务增长
          </p>
          <div className="cases-grid">
            {cases.map((case_, index) => (
              <div key={index} className="case-card">
                <div className="case-image">
                  <img src={case_.image} alt={case_.title} />
                  <span className="case-company">{case_.company}</span>
                </div>
                <div className="case-content">
                  <h3 className="case-title">{case_.title}</h3>
                  <p className="case-description">{case_.description}</p>
                  <div className="case-results">
                    {case_.results.map((result, i) => (
                      <div key={i} className="result-item">
                        <Icon name="trending_up" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="text">
                    查看详情
                    <Icon name="arrow_forward" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="container">
          <h2 className="section-title">合作流程</h2>
          <div className="process-steps">
            {[
              { icon: 'chat', title: '需求沟通', description: '深入了解您的业务需求' },
              { icon: 'design_services', title: '方案设计', description: '定制专属解决方案' },
              { icon: 'engineering', title: '开发实施', description: '专业团队保障项目实施' },
              { icon: 'support_agent', title: '持续服务', description: '提供长期技术支持' }
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-icon">
                  <Icon name={step.icon} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < 3 && <div className="step-arrow">
                  <Icon name="arrow_forward" />
                </div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">寻找适合您的解决方案</h2>
          <p className="cta-description">
            我们的专家团队随时为您提供专业咨询和支持
          </p>
          <div className="cta-buttons">
            <Button variant="primary" size="large">
              联系我们
            </Button>
            <Button variant="secondary" size="large">
              查看案例
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products; 