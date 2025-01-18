import React, { useState } from 'react';
import './AdvantagesTabs.css';

const AdvantagesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const advantages = [
    {
      title: '地域',
      items: [
        '全国1-4线',
        '300+个城市',
        '多点部署'
      ]
    },
    {
      title: '时效',
      items: [
        '7*24h',
        '全天候服务响应',
        '工程师4小时内到场'
      ]
    },
    {
      title: '资源',
      items: [
        '资源供给率95%个工作日内',
        '600+自有运维工程师团队',
        '1000+工程师网络技能认证',
        '1000+工程师云计算认证',
        '10000+工程师基础认证CSFA'
      ]
    },
    {
      title: '平台',
      items: [
        'IT服务管理系统ITSM',
        '基于ITIL(IT基础架构库)',
        '保障生态圈',
        '全流程的服务管理',
        '多元化的报修渠道',
        '大数据的自主分析',
        '扩展性的支撑活动库',
        '个性化的服务支撑',
        '强有力的规则引擎'
      ]
    },
    {
      title: '行业',
      items: [
        '覆盖金融、保险、通信、能源、制造、教育、房地产、医疗、餐饮、造纸、新零售等多行业客户，提供强大的IT基础架构运维、集成服务，以多地域、多层次的交付能力方案覆盖全国范围内复杂领域集成、造物开拓等多项目维护项目'
      ]
    }
  ];

  return (
    <section className="advantages-tabs">
      <div className="container">
        <h2 className="section-title">核心优势</h2>
        
        {/* 顶部筛选标签 */}
        <div className="advantages-filter">
          <div className="advantages-filter-list">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`advantages-filter-item ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="advantages-filter-title">{advantage.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 内容展示区域 */}
        <div className="advantages-content">
          <div className="advantage-items">
            {advantages[activeTab].items.map((item, index) => (
              <div key={index} className="advantage-item">
                <span className="item-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesTabs; 