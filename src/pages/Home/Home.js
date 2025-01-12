import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { 
  Section,
  Container,
  Motion,
  Button,
  Icon,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Progress
} from '../../components/common';
import { Carousel } from '../../components/common/Carousel';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const solutions = {
    it: [
      {
        title: '网络运维',
        description: '提供企业级网络基础设施的全面管理与维护，确保网络安全、稳定和高效运行。',
        icon: 'lan',
        features: [
          '网络架构规划',
          '性能监控分析',
          '故障诊断处理',
          '安全策略优化'
        ]
      },
      {
        title: '系统运维',
        description: '为企业服务器和系统提供全方位的运维服务，实现业务的持续稳定运行。',
        icon: 'computer',
        features: [
          '系统部署管理',
          '性能调优服务',
          '补丁更新维护',
          '容灾备份方案'
        ]
      },
      {
        title: '安全运维',
        description: '构建全方位的网络安全防护体系，保障企业数据和业务的安全。',
        icon: 'security',
        features: [
          '安全审计评估',
          '漏洞检测修复',
          '防火墙配置',
          '入侵检测防御'
        ]
      },
      {
        title: '数据运维',
        description: '专业的数据管理和维护服务，确保企业数据的安全性、完整性和可用性。',
        icon: 'backup',
        features: [
          '数据备份恢复',
          '数据迁移服务',
          '存储优化方案',
          '容灾保护体系'
        ]
      }
    ],
    smart: [
      {
        title: '智能办公',
        description: '打造现代化的智能办公环境，提升企业协作效率和工作体验。',
        icon: 'business',
        features: [
          '协同办公平台',
          '智能会议系统',
          '文档自动化',
          '工作流程优化'
        ]
      },
      {
        title: '智慧工厂',
        description: '通过物联网和自动化技术，实现工厂生产的智能化管理和控制。',
        icon: 'precision_manufacturing',
        features: [
          '生产线自动化',
          '设备智能监控',
          '质量控制系统',
          '能源管理优化'
        ]
      },
      {
        title: '数据分析',
        description: '利用先进的数据分析技术，助力企业实现数据驱动的决策和运营。',
        icon: 'analytics',
        features: [
          '商业智能分析',
          '预测性分析',
          '可视化报表',
          '决策支持系统'
        ]
      },
      {
        title: 'AI应用',
        description: '为企业提供定制化的人工智能解决方案，提升业务智能化水平。',
        icon: 'psychology',
        features: [
          '机器学习应用',
          '智能客服系统',
          '图像识别处理',
          '自然语言处理'
        ]
      }
    ],
    maintenance: [
      {
        title: '硬件维修',
        description: '专业的电脑及周边设备维修服务，快速解决各类硬件故障问题。',
        icon: 'build',
        features: [
          '电脑主机维修',
          '显示器维修',
          '打印机维修',
          '配件更换服务'
        ]
      },
      {
        title: '软件维护',
        description: '全面的软件维护和升级服务，确保系统稳定运行和功能优化。',
        icon: 'settings_suggest',
        features: [
          '系统优化加速',
          '软件故障修复',
          '病毒木马清除',
          '数据恢复服务'
        ]
      },
      {
        title: '网络维修',
        description: '专业的网络设备检修和优化服务，解决各类网络连接问题。',
        icon: 'router',
        features: [
          '网络故障排查',
          '设备检修维护',
          '网络性能优化',
          '布线系统维护'
        ]
      },
      {
        title: '应急响应',
        description: '7x24小时快速响应服务，第一时间处理紧急故障问题。',
        icon: 'emergency',
        features: [
          '远程技术支持',
          '现场紧急处理',
          '备用设备支持',
          '应急方案制定'
        ]
      }
    ],
    equipment: [
      {
        title: '办公设备',
        description: '提供高品质的办公设备采购服务，满足企业办公需求。',
        icon: 'desktop_windows',
        features: [
          '电脑整机采购',
          '打印设备选型',
          '显示器配置',
          '外设产品推荐'
        ]
      },
      {
        title: '网络设备',
        description: '专业的网络设备采购解决方案，构建高效稳定的网络环境。',
        icon: 'wifi',
        features: [
          '路由器选型',
          '交换机配置',
          '防火墙部署',
          '网络存储方案'
        ]
      },
      {
        title: '安防设备',
        description: '全方位的安防监控设备采购，保障企业安全管理需求。',
        icon: 'camera_outdoor',
        features: [
          '监控系统选型',
          '门禁系统配置',
          '报警设备部署',
          '联动系统方案'
        ]
      },
      {
        title: '智能设备',
        description: '创新的智能办公设备采购，提升企业智能化办公水平。',
        icon: 'devices',
        features: [
          '智能会议设备',
          '协作显示系统',
          '考勤门禁设备',
          '环境监测设备'
        ]
      }
    ]
  };

  const solutionTabs = [
    { title: '企业IT运维服务', data: solutions.it },
    { title: '智能化解决方案', data: solutions.smart },
    { title: '维修服务', data: solutions.maintenance },
    { title: '设备采购', data: solutions.equipment }
  ];

  const carouselImages = [
    {
      url: 'https://www.microswift.top/halo/12/bahtnvgk.jpg',
      alt: '联想电脑整体解决方案',
      title: '联想电脑整体解决方案',
      subtitle: '为企业或个人提供一站式IT解决方案',
      description: '从硬件选型到软件部署，从运维服务到技术支持，我们提供全方位的企业级IT服务。'
    },
    {
      url: 'https://www.microswift.top/halo/12/txrnnljt.png',
      alt: '多品牌产品技术服务',
      title: '多品牌产品技术服务',
      subtitle: '引领商务办公新潮流',
      description: '便捷、高效的查收、体验微讯云技术服务'
    },
    {
      url: 'https://www.microswift.top/halo/12/cticyhkg.jpg',
      alt: '电脑硬件升级服务',
      title: '整机体检方案',
      subtitle: '整机体检方案',
      description: '我们会对整机进行评测，给出最优的升级方案。'
    },
    {
      url: 'https://www.microswift.top/halo/12/wypqaujd.jpg',
      alt: 'IT运维管理咨询',
      title: 'IT运维管理咨询',
      subtitle: '专业可靠的企业级选择',
      description: '以客户业务为目标导向的IT服务管理方法，整合流程、人员和技术三大要素，帮助IT管理人员落地，实现IT运维管理的最佳实践。'
    },
    {
      url: 'https://www.microswift.top/halo/12/lzeupexm.jpg',
      alt: 'Lenovo Care 智享服务（延保）',
      title: '智享服务',
      subtitle: '延长专业服务',
      description: '保修期内不费心，我们专业的工程师为您服务'
    },
    {
      url: 'https://www.microswift.top/halo/12/teffglkf.jpg',
      alt: '企业服务',
      title: '企业服务',
      subtitle: '全方位的企业IT支持',
      description: '提供7x24小时技术支持，确保企业IT系统的稳定运行，为企业发展保驾护航。'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <Section className="hero-section">
        <Container>
          <Motion className="hero-content">
            <h1 className="hero-title animate">
              我们的使命是<span className="highlight">整合</span>全球<span className="highlight">信息</span>，
              <br />
              供大众使用，<span className="highlight">让人人受益</span>。
            </h1>
            <div className="hero-image animate">
              <img src="https://www.microswift.top/halo/12/xfwvhmuw.jpg" alt="Bill Guffey 如何利用 Google 街景寻找创作灵感" />
              <p className="image-caption">Bill Guffey 如何利用 Google 街景寻找创作灵感</p>
            </div>
          </Motion>
        </Container>
      </Section>

      {/* Solutions Section */}
      <Section className="solutions-tabs-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">我们能做什么</h2>
            <Tabs 
              className="solutions-tabs animate" 
              selectedIndex={activeTab} 
              onSelect={handleTabChange}
            >
              <TabList>
                {solutionTabs.map((tab, index) => (
                  <Tab key={index}>{tab.title}</Tab>
                ))}
              </TabList>
              
              {solutionTabs.map((tab, index) => (
                <TabPanel key={index}>
                  <Grid className="solutions-grid">
                    {tab.data.map((item, idx) => (
                      <Card key={idx} className="solution-item">
                        <div className="solution-icon">
                          <Icon name={item.icon} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="solution-features">
                          {item.features.map((feature, fidx) => (
                            <div key={fidx} className="feature-item">
                              <Icon name="check_circle" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    ))}
                  </Grid>
                </TabPanel>
              ))}
            </Tabs>
          </Motion>
        </Container>
      </Section>

      {/* 我们的服务 Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">我们的服务</h2>
          <Tabs className="services-tabs" selectedIndex={activeServiceTab} onSelect={index => setActiveServiceTab(index)}>
            <TabList>
              <Tab>IT运维服务</Tab>
              <Tab>集成解决方案</Tab>
            </TabList>

            <TabPanel>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="settings" />
                  </div>
                  <h3>IT运维管理咨询</h3>
                  <p>硬件维护、软件应用管理、网络安全、ITIL流程框架应用等</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>硬件设备维护与管理</span></li>
                      <li><Icon name="check_circle" /><span>软件应用部署与更新</span></li>
                      <li><Icon name="check_circle" /><span>网络安全监控与防护</span></li>
                      <li><Icon name="check_circle" /><span>ITIL最佳实践落地</span></li>
                    </ul>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="support_agent" />
                  </div>
                  <h3>IT服务台</h3>
                  <p>集中处理IT问题和请求的第一入口，实现IT管理过程的标准化</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>7x24小时服务支持</span></li>
                      <li><Icon name="check_circle" /><span>标准化流程管理</span></li>
                      <li><Icon name="check_circle" /><span>多渠道服务接入</span></li>
                      <li><Icon name="check_circle" /><span>智能化故障处理</span></li>
                    </ul>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="computer" />
                  </div>
                  <h3>桌面运维</h3>
                  <p>桌面电脑及相关设备的维护、监控和管理等</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>设备日常维护</span></li>
                      <li><Icon name="check_circle" /><span>性能监控优化</span></li>
                      <li><Icon name="check_circle" /><span>软件统一管理</span></li>
                      <li><Icon name="check_circle" /><span>安全策略部署</span></li>
                    </ul>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="dns" />
                  </div>
                  <h3>数据中心运维</h3>
                  <p>为企业信息系统提供高可用的运行环境</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>系统性能监控</span></li>
                      <li><Icon name="check_circle" /><span>容量规划管理</span></li>
                      <li><Icon name="check_circle" /><span>灾备方案实施</span></li>
                      <li><Icon name="check_circle" /><span>安全防护升级</span></li>
                    </ul>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="cloud" />
                  </div>
                  <h3>云运维</h3>
                  <p>连接各大公有云提供全套服务，赋能企业云计算能力</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>多云环境管理</span></li>
                      <li><Icon name="check_circle" /><span>资源弹性扩展</span></li>
                      <li><Icon name="check_circle" /><span>成本优化分析</span></li>
                      <li><Icon name="check_circle" /><span>安全合规保障</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="services-grid">
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="work" />
                  </div>
                  <h3>智慧办公解决方案</h3>
                  <p>统一管理、智能化管理办公分析需求强烈的硬件设备</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>智能办公设备</span></li>
                      <li><Icon name="check_circle" /><span>统一管理平台</span></li>
                      <li><Icon name="check_circle" /><span>数据分析报告</span></li>
                      <li><Icon name="check_circle" /><span>设备优化建议</span></li>
                    </ul>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="store" />
                  </div>
                  <h3>数字化门店解决方案</h3>
                  <p>全国店面的改造与升级，监控网络及IT相关业务的搭建与部署</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>智能化改造</span></li>
                      <li><Icon name="check_circle" /><span>网络部署优化</span></li>
                      <li><Icon name="check_circle" /><span>设备远程管理</span></li>
                      <li><Icon name="check_circle" /><span>数据实时监控</span></li>
                    </ul>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="router" />
                  </div>
                  <h3>网络弱电解决方案</h3>
                  <p>网络规划部署、网络优化、机房搬迁、Wi-Fi、监控部署等</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>网络架构规划</span></li>
                      <li><Icon name="check_circle" /><span>设备部署实施</span></li>
                      <li><Icon name="check_circle" /><span>性能优化调试</span></li>
                      <li><Icon name="check_circle" /><span>7x24运维保障</span></li>
                    </ul>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-icon">
                    <Icon name="memory" />
                  </div>
                  <h3>智能算力解决方案</h3>
                  <p>整合高效的数据算力与超融合架构，加速业务创新</p>
                  <div className="service-hover-content">
                    <ul>
                      <li><Icon name="check_circle" /><span>算力资源规划</span></li>
                      <li><Icon name="check_circle" /><span>架构优化设计</span></li>
                      <li><Icon name="check_circle" /><span>性能监控分析</span></li>
                      <li><Icon name="check_circle" /><span>持续优化升级</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>

      {/* 产品生命周期服务体验 Section */}
      <section className="product-lifecycle-section">
        <div className="container">
          <h2 className="section-title">产品生命周期服务体验</h2>
          <p className="section-subtitle">全方位深化客户满意度</p>
          <Tabs className="lifecycle-tabs">
            <TabList>
              <Tab>多品牌厂商定制服务</Tab>
              <Tab>微讯云自营定制服务</Tab> 
              <Tab>增值服务</Tab>
            </TabList>

            <TabPanel>
              <div className="carousel-container">
                <Carousel 
                  images={carouselImages.slice(0, 2)} 
                  autoPlayInterval={5000}
                />
              </div>
            </TabPanel>

            <TabPanel>
              <div className="carousel-container">
                <Carousel 
                  images={carouselImages.slice(2, 4)} 
                  autoPlayInterval={5000}
                />
              </div>
            </TabPanel>

            <TabPanel>
              <div className="carousel-container">
                <Carousel 
                  images={carouselImages.slice(4, 6)} 
                  autoPlayInterval={5000}
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <Section className="cta-section">
        <Container>
          <Motion>
            <h2 className="cta-title animate">加入我们，共创未来</h2>
            <p className="cta-description animate">
              探索更多机会，与我们一起推动技术创新
            </p>
          </Motion>
          <div className="cta-buttons">
            <Button 
              variant="primary" 
              size="large"
              icon={<Icon name="arrow_forward" />}
              onClick={() => window.location.href = '/careers'}
            >
              查看机会
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              icon={<Icon name="mail" />}
              onClick={() => window.location.href = '/contact'}
            >
              联系我们
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home; 