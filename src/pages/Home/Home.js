import React from 'react';
import { Link } from 'react-router-dom';
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
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Progress
} from '../../components/common';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Section className="hero-section">
        <Container>
          <Motion className="hero-content">
            <h1 className="hero-title animate">
              软件用起来才有价值，
              <br />
              才有改进的机会
            </h1>
            <p className="hero-description animate">
              我们致力于通过技术创新，为企业或个人提供更便捷、更智能的生活方式
            </p>
            <div className="hero-buttons animate">
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
                icon={<Icon name="play_circle" />}
              >
                观看视频
              </Button>
            </div>
          </Motion>
        </Container>
      </Section>

      {/* Video Showcase Section */}
      <Section className="video-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">产品展示</h2>
            <div className="video-container animate">
              <div className="video-wrapper">
                <img src="/images/home/product-video-cover.jpg" alt="产品视频封面" />
                <Button 
                  className="play-button"
                  variant="primary"
                  icon={<Icon name="play_circle_filled" size="large" />}
                  iconPosition="center"
                />
              </div>
              <div className="video-content">
                <h3>创新技术，改变生活</h3>
                <p>了解我们如何通过技术创新，为用户提供更好的解决方案</p>
                <div className="video-stats">
                  <div className="stat">
                    <Icon name="thumb_up" />
                    <span>98% 满意度</span>
                  </div>
                  <div className="stat">
                    <Icon name="groups" />
                    <span>10万+ 用户</span>
                  </div>
                </div>
              </div>
            </div>
          </Motion>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="features-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">致力于可持续发展</h2>
            <Grid className="features-grid">
              {[
                {
                  icon: 'rocket',
                  title: '技术创新',
                  description: '持续投入研发，推动技术进步'
                },
                {
                  icon: 'eco',
                  title: '绿色环保',
                  description: '致力于可持续发展，保护地球环境'
                },
                {
                  icon: 'diversity_3',
                  title: '普惠科技',
                  description: '让科技创新惠及更多人群'
                },
                {
                  icon: 'verified_4',
                  title: '诚信正直',
                  description: '我们坚持诚信经营，赢得用户和合作伙伴的信任。'
                }
              ].map((feature, index) => (
                <Motion key={index} delay={index * 0.1}>
                  <Card className="feature-card animate">
                    <CardContent>
                      <div className="feature-icon">
                        <Icon name={feature.icon} size="large" />
                      </div>
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-description">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </Grid>
          </Motion>
        </Container>
      </Section>

      {/* Stats Section - 新增数据统计部分 */}
      <Section className="stats-section">
        <Container>
          <Motion>
            <Grid className="stats-grid animate">
              {[
                {
                  icon: 'trending_up',
                  number: '200+',
                  label: '成功项目',
                  color: 'primary'
                },
                {
                  icon: 'groups',
                  number: '50,000+',
                  label: '服务用户',
                  color: 'success'
                },
                {
                  icon: 'workspace_premium',
                  number: '30+',
                  label: '技术专利',
                  color: 'warning'
                },
                {
                  icon: 'public',
                  number: '10+',
                  label: '服务国家',
                  color: 'info'
                }
              ].map((stat, index) => (
                <Motion key={index} delay={index * 0.1}>
                  <Card className={`stat-card animate stat-${stat.color}`}>
                    <CardContent>
                      <Icon name={stat.icon} size="large" className="stat-icon" />
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                      <div className="stat-circle"></div>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </Grid>
          </Motion>
        </Container>
      </Section>

      {/* Technology Stack Section */}
      <Section className="tech-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">技术优势</h2>
            <Tabs className="tech-tabs animate">
              <TabList>
                <Tab>前端技术</Tab>
                <Tab>后端架构</Tab>
                <Tab>云服务</Tab>
                <Tab>人工智能</Tab>
              </TabList>
              
              <TabPanel>
                <Grid className="tech-grid">
                  {[
                    { icon: 'code', name: 'React', progress: 95, description: '现代化的用户界面开发' },
                    { icon: 'palette', name: 'Vue', progress: 90, description: '灵活的渐进式框架' },
                    { icon: 'web', name: 'Angular', progress: 85, description: '企业级应用开发' },
                    { icon: 'phone_iphone', name: 'Flutter', progress: 88, description: '跨平台移动应用开发' }
                  ].map((tech, index) => (
                    <div key={index} className="tech-item">
                      <Icon name={tech.icon} size="large" className="tech-icon" />
                      <h4>{tech.name}</h4>
                      <Progress value={tech.progress} color="primary" />
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  ))}
                </Grid>
              </TabPanel>
              
              <TabPanel>
                <Grid className="tech-grid">
                  {[
                    { icon: 'storage', name: 'Node.js', progress: 92, description: '高性能服务器开发' },
                    { icon: 'dns', name: 'Spring Boot', progress: 88, description: '企业级后端框架' },
                    { icon: 'memory', name: 'Microservices', progress: 85, description: '微服务架构设计' },
                    { icon: 'security', name: 'Security', progress: 90, description: '全方位安全防护' }
                  ].map((tech, index) => (
                    <div key={index} className="tech-item">
                      <Icon name={tech.icon} size="large" className="tech-icon" />
                      <h4>{tech.name}</h4>
                      <Progress value={tech.progress} color="success" />
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel>
                <Grid className="tech-grid">
                  {[
                    { icon: 'cloud', name: 'AWS', progress: 90, description: '云服务基础设施' },
                    { icon: 'backup', name: 'Azure', progress: 85, description: '企业云解决方案' },
                    { icon: 'cloud_sync', name: 'DevOps', progress: 88, description: '自动化部署和运维' },
                    { icon: 'shield', name: 'Security', progress: 92, description: '云安全防护' }
                  ].map((tech, index) => (
                    <div key={index} className="tech-item">
                      <Icon name={tech.icon} size="large" className="tech-icon" />
                      <h4>{tech.name}</h4>
                      <Progress value={tech.progress} color="info" />
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  ))}
                </Grid>
              </TabPanel>

              <TabPanel>
                <Grid className="tech-grid">
                  {[
                    { icon: 'psychology', name: '机器学习', progress: 85, description: '智能算法研发' },
                    { icon: 'hub', name: '深度学习', progress: 82, description: '神经网络模型' },
                    { icon: 'analytics', name: '数据分析', progress: 88, description: '大数据处理分析' },
                    { icon: 'auto_awesome', name: 'NLP', progress: 80, description: '自然语言处理' }
                  ].map((tech, index) => (
                    <div key={index} className="tech-item">
                      <Icon name={tech.icon} size="large" className="tech-icon" />
                      <h4>{tech.name}</h4>
                      <Progress value={tech.progress} color="warning" />
                      <p className="tech-description">{tech.description}</p>
                    </div>
                  ))}
                </Grid>
              </TabPanel>
            </Tabs>
          </Motion>
        </Container>
      </Section>

      {/* Solutions Section - 新增解决方案部分 */}
      <Section className="solutions-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">解决方案</h2>
            <p className="section-description animate">
              为不同行业提供专业的数字化解决方案，助力企业转型升级
            </p>
            <Grid className="solutions-grid">
              {[
                {
                  icon: 'factory',
                  title: '智能制造',
                  description: '工业4.0解决方案，实现生产智能化',
                  features: ['生产监控', '预测维护', '质量管理', '库存优化'],
                  color: 'primary'
                },
                {
                  icon: 'shopping_cart',
                  title: '智慧零售',
                  description: '全渠道零售解决方案，提升购物体验',
                  features: ['会员管理', '库存管理', '营销活动', '数据分析'],
                  color: 'success'
                },
                {
                  icon: 'account_balance',
                  title: '金融科技',
                  description: '安全可靠的金融科技解决方案',
                  features: ['风险控制', '支付系统', '智能投顾', '区块链'],
                  color: 'info'
                }
              ].map((solution, index) => (
                <Motion key={index} delay={index * 0.1}>
                  <Card className={`solution-card animate solution-${solution.color}`}>
                    <CardContent>
                      <div className="solution-icon">
                        <Icon name={solution.icon} size="large" />
                      </div>
                      <h3 className="solution-title">{solution.title}</h3>
                      <p className="solution-description">{solution.description}</p>
                      <div className="solution-features">
                        {solution.features.map((feature, fIndex) => (
                          <div key={fIndex} className="feature-item">
                            <Icon name="check_circle" size="small" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="text"
                        className="solution-button"
                        icon={<Icon name="arrow_forward" />}
                        iconPosition="right"
                      >
                        了解更多
                      </Button>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </Grid>
          </Motion>
        </Container>
      </Section>

      {/* Latest News Section */}
      <Section className="news-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">最新动态</h2>
            <Grid className="news-grid">
              {[
                {
                  image: '/images/home/news1.jpg',
                  category: '创新',
                  title: '发布全新技术博客',
                  description: '助力企业数字化转型'
                },
                {
                  image: '/images/home/news2.jpg',
                  category: '可持续发展',
                  title: '推进有设备的地方就有服务',
                  description: '打造官方服务中心'
                }
              ].map((news, index) => (
                <Motion key={index} delay={index * 0.1}>
                  <Card className="news-card animate">
                    <CardMedia className="news-image">
                      <img src={news.image} alt={news.title} />
                      <span className="news-category">{news.category}</span>
                    </CardMedia>
                    <CardContent className="news-content">
                      <h3 className="news-title">{news.title}</h3>
                      <p className="news-description">{news.description}</p>
                      <Button 
                        variant="text"
                        icon={<Icon name="arrow_forward" />}
                        iconPosition="right"
                      >
                        了解更多
                      </Button>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </Grid>
          </Motion>
        </Container>
      </Section>

      {/* Partners Section */}
      <Section className="partners-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">合作伙伴</h2>
            <Grid className="partners-grid animate">
              {[
                { logo: '/images/partners/partner1.png', name: '合作伙伴1' },
                { logo: '/images/partners/partner2.png', name: '合作伙伴2' },
                { logo: '/images/partners/partner3.png', name: '合作伙伴3' },
                { logo: '/images/partners/partner4.png', name: '合作伙伴4' }
              ].map((partner, index) => (
                <Motion key={index} delay={index * 0.1}>
                  <Card className="partner-card animate">
                    <CardContent className="partner-item">
                      <img src={partner.logo} alt={partner.name} />
                      <h4>{partner.name}</h4>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </Grid>
          </Motion>
        </Container>
      </Section>

      {/* Case Studies Section */}
      <Section className="cases-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">成功案例</h2>
            <Grid className="cases-grid">
              {[
                {
                  image: '/images/cases/case1.jpg',
                  title: '企业数字化转型',
                  description: '帮助传统企业实现数字化转型，提升运营效率',
                  stats: { roi: '+150%', time: '-60%' }
                },
                {
                  image: '/images/cases/case2.jpg',
                  title: '智能工厂解决方案',
                  description: '打造智能制造示范工厂，实现生产智能化',
                  stats: { efficiency: '+200%', cost: '-40%' }
                }
              ].map((case_, index) => (
                <Motion key={index} delay={index * 0.1}>
                  <Card className="case-card animate">
                    <CardMedia className="case-image">
                      <img src={case_.image} alt={case_.title} />
                    </CardMedia>
                    <CardContent>
                      <h3>{case_.title}</h3>
                      <p>{case_.description}</p>
                      <div className="case-stats">
                        {Object.entries(case_.stats).map(([key, value]) => (
                          <div key={key} className="stat">
                            <div className="value">{value}</div>
                            <div className="label">{key}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </Grid>
          </Motion>
        </Container>
      </Section>

      {/* Awards Section */}
      <Section className="awards-section">
        <Container>
          <Motion>
            <h2 className="section-title animate">荣誉与认证</h2>
            <Grid className="awards-grid animate">
              {[
                { image: '/images/awards/award1.jpg', title: '年度创新企业' },
                { image: '/images/awards/award2.jpg', title: '技术领军企业' },
                { image: '/images/awards/award3.jpg', title: '最佳解决方案奖' }
              ].map((award, index) => (
                <Motion key={index} delay={index * 0.1}>
                  <Card className="award-card animate">
                    <CardContent className="award-item">
                      <img src={award.image} alt={award.title} />
                      <h4>{award.title}</h4>
                    </CardContent>
                  </Card>
                </Motion>
              ))}
            </Grid>
          </Motion>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="cta-section">
        <Container>
          <Motion>
            <h2 className="cta-title animate">加入我们，共创未来</h2>
            <p className="cta-description animate">
              探索更多机会，与我们一起推动技术创新
            </p>
            <div className="cta-buttons animate">
              <Button 
                variant="primary" 
                size="large"
                icon={<Icon name="arrow_forward" />}
              >
                查看机会
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                icon={<Icon name="mail" />}
              >
                联系我们
              </Button>
            </div>
          </Motion>
        </Container>
      </Section>
    </div>
  );
};

export default Home; 