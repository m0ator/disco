import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import './StoryDetail.css';

// 模拟数据库中的故事数据
const storiesData = {
  'featured-001': {
    id: 'featured-001',
    category: '特别报道',
    title: '科技创新的下一个十年',
    date: '2024-03-15',
    author: {
      name: '张明',
      title: '技术总监'
    },
    tags: ['技术创新', '人工智能', '数字化转型'],
    content: `
      <p class="story-lead">在这个快速发展的数字时代，技术创新正在以前所未有的速度改变着我们的生活方式。</p>
      
      <h2>引领变革</h2>
      <p>我们始终致力于通过技术创新来解决全球性挑战。从人工智能到可再生能源，从数字化转型到智能制造，我们正在各个领域推动技术进步。</p>
      
      <h2>未来展望</h2>
      <p>展望未来，我们将继续投资前沿技术，推动产业升级，为用户创造更多价值。通过持续创新，我们希望能够为建设更美好的世界贡献自己的力量。</p>
      
      <blockquote class="story-quote">
        "创新不仅仅是技术的进步，更是为了让生活变得更美好。"
      </blockquote>
    `
  },
  'story-001': {
    id: 'story-001',
    category: '创新',
    title: '用技术改变世界',
    date: '2024-03-15',
    author: {
      name: '李华',
      title: '产品经理'
    },
    tags: ['创新', '技术', '未来'],
    content: `
      <p class="story-lead">探索我们如何通过创新技术解决全球性挑战。</p>
      
      <h2>技术创新的力量</h2>
      <p>在当今快速发展的世界中，技术创新正在重塑我们的生活方式和工作方式。我们致力于将最新的技术应用于解决实际问题，为社会创造更大的价值。</p>
      
      <h2>全球化视角</h2>
      <p>通过全球化的视角，我们不断探索新的可能性，将创新成果带给更多人。</p>
      
      <blockquote class="story-quote">
        "创新是推动世界进步的核心动力。"
      </blockquote>
    `
  },
  'story-002': {
    id: 'story-002',
    category: '可持续发展',
    title: '建设绿色未来',
    date: '2024-03-10',
    author: {
      name: '王芳',
      title: '可持续发展总监'
    },
    tags: ['可持续发展', '环保', '绿色技术'],
    content: `
      <p class="story-lead">了解我们在环境保护和可持续发展方面的努力。</p>
      
      <h2>绿色科技</h2>
      <p>我们积极投入绿色科技的研发，致力于减少碳排放，推动可再生能源的应用。通过技术创新，我们正在为地球的可持续发展贡献力量。</p>
      
      <h2>环保行动</h2>
      <p>从日常运营到产品设计，我们始终将环保理念放在首位，努力实现与自然的和谐共处。</p>
      
      <blockquote class="story-quote">
        "地球是我们唯一的家园，保护环境就是保护我们自己。"
      </blockquote>
    `
  },
  'story-003': {
    id: 'story-003',
    category: '社会责任',
    title: '科技普惠大众',
    date: '2024-03-05',
    author: {
      name: '赵伟',
      title: '社会责任项目主管'
    },
    tags: ['科技普惠', '社会责任', '教育'],
    content: `
      <p class="story-lead">探索我们如何让技术惠及更多人群。</p>
      
      <h2>数字包容</h2>
      <p>我们相信，科技的进步应该惠及每一个人。通过各种项目和计划，我们努力消除数字鸿沟，让更多人享受到科技发展带来的便利。</p>
      
      <h2>教育赋能</h2>
      <p>教育是改变命运的关键。我们通过技术手段，为偏远地区的学生提供优质的教育资源，帮助他们实现梦想。</p>
      
      <blockquote class="story-quote">
        "科技的真正价值在于能够改善人们的生活。"
      </blockquote>
    `
  },
  'story-004': {
    id: 'story-004',
    category: '创新',
    title: '人工智能的突破性进展',
    date: '2024-03-14',
    author: {
      name: '陈明',
      title: 'AI研究主管'
    },
    tags: ['人工智能', '机器学习', '深度学习'],
    content: `
      <p class="story-lead">了解人工智能领域的最新研究成果和应用场景。</p>
      
      <h2>人工智能的突破性进展</h2>
      <p>人工智能技术正在以前所未有的速度改变着我们的生活方式和工作方式。我们致力于将最新的研究成果应用于解决实际问题，为社会创造更大的价值。</p>
      
      <h2>人工智能的应用</h2>
      <p>通过人工智能技术，我们正在为社会创造更多的可能性，将创新成果带给更多人。</p>
      
      <blockquote class="story-quote">
        "人工智能是推动社会进步的核心动力。"
      </blockquote>
    `
  },
  'story-005': {
    id: 'story-005',
    category: '创新',
    title: '量子计算：未来已来',
    date: '2024-03-13',
    author: {
      name: '杨博士',
      title: '量子计算研究员'
    },
    tags: ['量子计算', '前沿科技', '计算机科学'],
    content: `
      <p class="story-lead">量子计算正在重新定义计算的边界，开启全新的科技时代。</p>
      
      <h2>量子优势</h2>
      <p>量子计算机利用量子力学原理，能够以指数级的速度解决传统计算机难以处理的复杂问题。在密码学、药物研发、气候模拟等领域，量子计算展现出巨大潜力。</p>
      
      <h2>技术突破</h2>
      <p>我们的研究团队在量子比特相干时间、量子纠错等关键技术上取得重要突破，为实用化量子计算机的研发铺平道路。</p>
      
      <blockquote class="story-quote">
        "量子计算将彻底改变我们认知和解决问题的方式。"
      </blockquote>
    `
  },
  'story-006': {
    id: 'story-006',
    category: '可持续发展',
    title: '零碳技术的创新之路',
    date: '2024-03-09',
    author: {
      name: '林晓',
      title: '环保技术专家'
    },
    tags: ['零碳技术', '可持续发展', '环境保护'],
    content: `
      <p class="story-lead">探索前沿零碳技术如何助力实现碳中和目标。</p>
      
      <h2>技术创新</h2>
      <p>从碳捕捉到新能源存储，零碳技术正在各个领域取得突破性进展。我们开发的新一代碳捕捉材料，能够以更低的成本、更高的效率减少碳排放。</p>
      
      <h2>产业实践</h2>
      <p>通过与各行业合作，我们将零碳技术应用于工业生产、建筑节能、交通运输等领域，推动绿色转型。</p>
      
      <blockquote class="story-quote">
        "创新技术是实现碳中和目标的关键。"
      </blockquote>
    `
  },
  'story-007': {
    id: 'story-007',
    category: '可持续发展',
    title: '循环经济与可持续设计',
    date: '2024-03-08',
    author: {
      name: '周可',
      title: '可持续设计主管'
    },
    tags: ['循环经济', '可持续设计', '绿色创新'],
    content: `
      <p class="story-lead">探索如何通过创新设计理念推动循环经济发展。</p>
      
      <h2>设计革新</h2>
      <p>可持续设计不仅关注产品的功能和美感，更注重其全生命周期的环境影响。我们的设计团队致力于开发可回收、可维修、低碳环保的产品。</p>
      
      <h2>材料创新</h2>
      <p>通过使用可再生材料和创新工艺，我们正在重新定义产品设计的可能性，推动循环经济的发展。</p>
      
      <blockquote class="story-quote">
        "可持续设计是构建循环经济的基石。"
      </blockquote>
    `
  },
  'story-008': {
    id: 'story-008',
    category: '数字化转型',
    title: '企业数字化转型之路',
    date: '2024-03-07',
    author: {
      name: '郑强',
      title: '数字化转型顾问'
    },
    tags: ['数字化转型', '企业创新', '技术变革'],
    content: `
      <p class="story-lead">解析企业如何实现成功的数字化转型。</p>
      
      <h2>转型策略</h2>
      <p>数字化转型不仅是技术升级，更是思维方式和组织文化的转变。我们帮助企业制定全面的数字化战略，实现业务创新和效率提升。</p>
      
      <h2>实践案例</h2>
      <p>通过多个成功案例，我们总结出数字化转型的关键要素和最佳实践，为企业提供可落地的解决方案。</p>
      
      <blockquote class="story-quote">
        "数字化转型是企业适应未来的必由之路。"
      </blockquote>
    `
  },
  'story-009': {
    id: 'story-009',
    category: '数字化转型',
    title: '云原生技术的演进',
    date: '2024-03-06',
    author: {
      name: '陈云',
      title: '云架构师'
    },
    tags: ['云原生', '微服务', '容器化'],
    content: `
      <p class="story-lead">探讨云原生技术如何改变现代软件开发模式。</p>
      
      <h2>技术演进</h2>
      <p>从单体应用到微服务架构，从虚拟机到容器化部署，云原生技术正在重塑软件开发和运维的方式。我们深入研究云原生技术栈，为企业提供更灵活、更可靠的技术解决方案。</p>
      
      <h2>最佳实践</h2>
      <p>基于大量实践经验，我们总结了云原生转型的关键步骤和注意事项，帮助企业平稳完成技术升级。</p>
      
      <blockquote class="story-quote">
        "云原生不仅是技术选择，更是一种思维方式的转变。"
      </blockquote>
    `
  },
  'story-010': {
    id: 'story-010',
    category: '人工智能',
    title: 'AI驱动的智能决策',
    date: '2024-03-04',
    author: {
      name: '张智',
      title: 'AI决策系统专家'
    },
    tags: ['人工智能', '机器学习', '智能决策'],
    content: `
      <p class="story-lead">探索AI如何革新企业决策流程，提升决策效率和准确性。</p>
      
      <h2>智能决策系统</h2>
      <p>通过深度学习和大数据分析，我们开发的AI决策支持系统能够快速处理海量数据，为管理者提供科学的决策建议。系统不仅考虑历史数据，还能预测未来趋势，大大提升决策的准确性。</p>
      
      <h2>应用场景</h2>
      <p>从风险评估到市场预测，从资源调配到战略规划，AI决策系统在各个领域都发挥着重要作用。我们将持续优化算法模型，使系统更好地服务于企业发展。</p>
      
      <blockquote class="story-quote">
        "AI不是要替代人的决策，而是要增强人的决策能力。"
      </blockquote>
    `
  },
  'story-011': {
    id: 'story-011',
    category: '人工智能',
    title: '机器学习的工业应用',
    date: '2024-03-03',
    author: {
      name: '李工',
      title: '工业智能化专家'
    },
    tags: ['机器学习', '工业4.0', '智能制造'],
    content: `
      <p class="story-lead">机器学习技术如何在工业领域创造价值，推动智能制造发展。</p>
      
      <h2>智能工厂</h2>
      <p>通过部署机器学习系统，工厂可以实现设备预测性维护、质量自动检测、生产流程优化等功能。这不仅提高了生产效率，还降低了运营成本。</p>
      
      <h2>数据驱动</h2>
      <p>工业物联网产生的海量数据为机器学习提供了丰富的训练素材。通过对这些数据的深入分析，我们能够不断优化生产流程，提升产品质量。</p>
      
      <blockquote class="story-quote">
        "数据是新时代的工业原油，机器学习是提炼这些数据价值的最佳工具。"
      </blockquote>
    `
  },
  'story-012': {
    id: 'story-012',
    category: '智慧城市',
    title: '智慧交通的未来',
    date: '2024-03-02',
    author: {
      name: '王智',
      title: '智慧交通规划师'
    },
    tags: ['智慧交通', '城市规划', '物联网'],
    content: `
      <p class="story-lead">探索智能交通系统如何改善城市出行体验，打造宜居城市。</p>
      
      <h2>智能调度</h2>
      <p>基于实时数据分析的智能交通调度系统，能够动态调整信号灯配时，优化公交线路，有效缓解交通拥堵。我们开发的预测模型可以提前预警潜在的交通问题。</p>
      
      <h2>绿色出行</h2>
      <p>通过整合共享单车、公共交通等多种出行方式，我们为市民提供更环保、更便捷的出行选择。智能推荐系统会根据实时路况为用户规划最优出行路线。</p>
      
      <blockquote class="story-quote">
        "智慧交通不仅要解决出行问题，更要创造美好的城市生活。"
      </blockquote>
    `
  },
  'story-013': {
    id: 'story-013',
    category: '智慧城市',
    title: '数字孪生与城市规划',
    date: '2024-03-01',
    author: {
      name: '刘建',
      title: '城市数字化专家'
    },
    tags: ['数字孪生', '智慧城市', '城市规划', '数据可视化'],
    content: `
      <p class="story-lead">数字孪生技术如何重塑现代城市规划，打造智慧宜居的未来城市。</p>
      
      <h2>数字孪生城市</h2>
      <p>通过构建城市的数字孪生体，我们可以在虚拟环境中模拟和优化城市运营的各个方面。从建筑规划到交通流量，从能源分配到环境监测，数字孪生技术为城市管理者提供了前所未有的决策支持工具。</p>
      
      <h2>智能规划</h2>
      <p>基于实时数据和历史数据的分析，数字孪生平台能够预测城市发展趋势，评估不同规划方案的影响。这种数据驱动的规划方法大大提高了城市规划的科学性和准确性。</p>
      
      <h2>协同管理</h2>
      <p>数字孪生平台打破了传统部门之间的信息壁垒，实现了城市各个系统的协同管理。通过统一的数据平台，各个部门可以共享信息，协同决策，提高城市治理效率。</p>
      
      <h2>未来展望</h2>
      <p>随着5G、物联网、人工智能等技术的发展，数字孪生城市将变得更加智能和精准。我们正在探索将区块链、边缘计算等新技术融入数字孪生平台，进一步提升其功能和性能。</p>
      
      <blockquote class="story-quote">
        "数字孪生不仅是城市的镜像，更是城市的未来。通过数字技术，我们能够更好地理解、规划和管理城市，为市民创造更美好的生活。"
      </blockquote>
      
      <h2>实践案例</h2>
      <p>在最近的智慧城市项目中，我们成功构建了覆盖整个城市的数字孪生系统。该系统不仅支持城市规划和管理的日常工作，还在突发事件应对、城市更新改造等方面发挥了重要作用。</p>
      
      <h2>技术创新</h2>
      <p>我们开发的新一代数字孪生平台采用了微服务架构和容器化技术，支持灵活扩展和快速部署。平台整合了多源数据，支持实时渲染和交互式分析，为城市管理者提供了直观的决策支持工具。</p>
      
      <blockquote class="story-quote">
        "让数据说话，让城市更智慧。数字孪生技术正在开启城市规划和管理的新纪元。"
      </blockquote>
    `
  }
};

const StoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 获取故事数据
  const story = storiesData[id];

  // 如果找不到故事，重定向到故事列表页
  if (!story) {
    navigate('/stories');
    return null;
  }

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
              <div className="author-name">{story.author.name}</div>
              <div className="author-title">{story.author.title}</div>
            </div>
            <time className="publish-date">{story.date}</time>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="story-content">
        <div className="container">
          <div className="content-wrapper">
            <article 
              className="main-content"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />
            
            <div className="story-actions">
              <div className="story-tags">
                {story.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
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