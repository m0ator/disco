import React from 'react';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import Motion from '../../components/common/Motion/Motion';
import Text from '../../components/common/Text/Text';
import { Result } from '../../components/common/Result/Result';
import { Card } from '../../components/common/Card/Card';
import { Timeline } from '../../components/common/Timeline/Timeline';
import './Integrity.css';
import { useScrollToHash } from '../../hooks/useScrollToHash';

const Integrity = () => {
  useScrollToHash();

  const reports = [
    {
      title: '2023年透明度报告',
      description: '了解我们如何保护用户数据和维护平台安全。',
      date: '2023年12月',
      icon: 'description'
    },
    {
      title: '隐私和安全白皮书',
      description: '详细了解我们的数据保护措施和安全实践。',
      date: '2023年9月',
      icon: 'security'
    }
  ];

  const principles = [
    {
      icon: 'shield',
      title: '保护用户隐私',
      description: '我们采用业界领先的安全措施，保护用户数据安全。',
      color: 'var(--color-blue)'
    },
    {
      icon: 'verified',
      title: '内容真实性',
      description: '我们致力于打击虚假信息，确保内容的真实可靠。',
      color: 'var(--color-green)'
    },
    {
      icon: 'balance',
      title: '公平竞争',
      description: '我们支持开放和公平的市场环境，促进良性竞争。',
      color: 'var(--color-orange)'
    }
  ];

  const commitments = [
    { icon: 'description', text: '透明度报告' },
    { icon: 'security', text: '数据安全' },
    { icon: 'privacy_tip', text: '用户隐私' },
    { icon: 'balance', text: '算法公平' }
  ];

  const timeline = [
    {
      year: '2024',
      title: '持续创新',
      description: '推出全新的数据保护方案，进一步加强用户隐私保护。'
    },
    {
      year: '2021',
      title: '技术升级',
      description: '升级安全基础设施，获得多项安全认证。'
    },
    {
      year: '2020',
      title: '制度完善',
      description: '建立完整的诚信管理体系，发布首份透明度报告。'
    }
  ];

  return (
    <div className="integrity-page">
      {/* Hero Section */}
      <Section className="hero-section">
        <Container>
          <Motion>
            <Text 
              as="h1" 
              className="hero-title" 
              size="4xl" 
              weight="bold"
            >
              诚信与透明
            </Text>
            <Text 
              as="p" 
              className="hero-subtitle" 
              size="xl" 
              color="secondary"
            >
              我们勤于以负责任的方式开展业务，赢得并保持用户的信任，推动可持续发展
            </Text>
          </Motion>
        </Container>
      </Section>

      {/* Principles Section */}
      <Section id="principles" className="principles-section">
        <Container>
          <Motion>
            <Text as="h2" className="section-title" size="2xl" weight="bold" align="center">
              我们的原则
            </Text>
            <div className="principles-grid">
              {principles.map((principle, index) => (
                <Card 
                  key={index}
                  className="principle-card"
                  hover
                >
                  <div className="principle-icon">
                    <Icon name={principle.icon} />
                  </div>
                  <Text as="h3" className="principle-title" size="xl" weight="medium">
                    {principle.title}
                  </Text>
                  <Text as="p" className="principle-description" color="secondary">
                    {principle.description}
                  </Text>
                </Card>
              ))}
            </div>
          </Motion>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline" className="timeline-section">
        <Container>
          <Motion>
            <Text 
              as="h2" 
              className="section-title" 
              size="2xl" 
              weight="bold" 
              align="center"
            >
              诚信发展
            </Text>
            <Timeline items={timeline} />
          </Motion>
        </Container>
      </Section>

      {/* Commitment Section */}
      <Section id="commitments" className="commitment-section">
        <Container>
          <Motion>
            <div className="commitment-content">
              <div className="commitment-text">
                <Text 
                  as="h2" 
                  className="section-title" 
                  size="2xl" 
                  weight="bold"
                  align="center"
                >
                  我们的承诺
                </Text>
                <Text 
                  as="p" 
                  className="commitment-description" 
                  color="secondary"
                  align="center"
                >
                  我们承诺以最高的道德标准开展业务，并持续改进我们的实践。
                </Text>
              </div>
              <div className="commitment-list">
                {commitments.map((item, index) => (
                  <div key={index} className="commitment-item">
                    <div className="commitment-icon">
                      <Icon name={item.icon} />
                    </div>
                    <div className="commitment-content-text">
                      <div className="commitment-title">{item.text}</div>
                      <div className="commitment-detail">
                        {item.description || '了解更多关于我们如何实践这一承诺的细节。'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Motion>
        </Container>
      </Section>

      {/* Reports Section */}
      <Section id="reports" className="reports-section">
        <Container>
          <Motion>
            <Text as="h2" className="section-title" size="2xl" weight="bold" align="center">
              透明度报告
            </Text>
            <div className="reports-grid">
              {reports.map((report, index) => (
                <Result
                  key={index}
                  icon={<Icon name={report.icon} className="result-icon" />}
                  title={
                    <Text size="xl" weight="medium">
                      {report.title}
                    </Text>
                  }
                  subTitle={
                    <Text color="secondary">
                      {report.description}
                    </Text>
                  }
                  extra={
                    <Button 
                      variant="secondary"
                      icon={<Icon name="download" />}
                    >
                      查看报告
                    </Button>
                  }
                  status="info"
                />
              ))}
            </div>
          </Motion>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="cta-section">
        <Container>
          <Motion>
            <Text 
              as="h2" 
              className="cta-title" 
              size="2xl" 
              weight="bold"
              align="center"
            >
              共同维护诚信环境
            </Text>
            <Text 
              as="p" 
              className="cta-description" 
              size="lg" 
              opacity={0.9}
              align="center"
            >
              了解更多关于我们的诚信建设工作，或向我们报告问题
            </Text>
            <div className="cta-buttons">
              <Button 
                variant="primary" 
                size="large"
                icon={<Icon name="arrow_forward" />}
              >
                了解更多
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                icon={<Icon name="report" />}
              >
                报告问题
              </Button>
            </div>
          </Motion>
        </Container>
      </Section>
    </div>
  );
};

export default Integrity; 