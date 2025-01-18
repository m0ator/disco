import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon/Icon';
import Button from '../../components/common/Button/Button';
import ContactModal from '../../components/common/ContactModal/ContactModal';
import ServiceTabs from '../../components/common/ServiceTabs/ServiceTabs';
import CaseStudies from '../../components/common/CaseStudies/CaseStudies';
import AdvantagesTabs from '../../components/common/AdvantagesTabs/AdvantagesTabs';
import './Products.css';

const Products = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const navigate = useNavigate();

  // 合作流程数据
  const cooperationSteps = [
    {
      icon: 'handshake',
      title: '需求沟通',
      description: '深入了解客户业务场景和痛点，确定核心需求'
    },
    {
      icon: 'architecture',
      title: '方案设计',
      description: '基于需求定制专业解决方案，优化业务流程'
    },
    {
      icon: 'engineering',
      title: '技术实施',
      description: '专业团队快速交付，确保方案落地实施'
    },
    {
      icon: 'support_agent',
      title: '持续服务',
      description: '提供全方位技术支持，保障系统稳定运行'
    }
  ];

  const stepsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    const stepCards = stepsRef.current?.querySelectorAll('.step-card');
    stepCards?.forEach((card) => observer.observe(card));

    return () => {
      stepCards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const handleViewCases = () => {
    navigate('/stories'); // 跳转到故事页面
  };

  const serviceItems = [
    {
      icon: 'memory',
      title: '硬件加装升级',
      description: '专业硬件升级服务，提升设备性能，延长设备使用寿命。我们提供从配件选型到安装调试的一站式服务。',
      features: [
        'SSD固态硬盘升级',
        '内存条扩容升级',
        '显卡升级替换',
        '散热系统优化',
        '电源模组升级',
        '机箱改装服务'
      ],
      price: '￥79起',
      time: '0.3-3小时'
    },
    {
      icon: 'terminal',
      title: '软件部署调优',
      description: '专业的软件环境配置与系统优化服务，提升系统运行效率，优化软件使用体验。',
      features: [
        '系统性能优化',
        '专业软件安装',
        '开发环境配置',
        '驱动程序更新',
        '系统安全加固',
        '性能监控部署'
      ],
      price: '￥80',
      time: '1-2小时'
    },
    {
      icon: 'build',
      title: '故障检测维修',
      description: '专业的故障诊断与维修服务，快速解决各类硬件故障，提供详细的检测报告。',
      features: [
        '硬件故障检测',
        '部件维修更换',
        '系统故障修复',
        '蓝屏问题处理',
        '病毒木马清除',
        '性能问题诊断'
      ],
      price: '￥40起',
      time: '1-4小时'
    },
    {
      icon: 'computer',
      title: 'DIY装机服务',
      description: '专业的电脑装机服务，从配件选购到系统部署的一站式服务，打造专属于您的电脑。',
      features: [
        '配件挑选建议',
        '整机组装服务',
        '系统安装调试',
        '性能测试调优',
        '跑分性能测试',
        '保修质保服务'
      ],
      price: '￥99起',
      time: '2-4小时'
    },
    {
      icon: 'security',
      title: '整机延保服务',
      description: '专业的电脑延保服务，延长设备保修期限，提供更长久的售后保障。',
      features: [
        '延长保修期限',
        '免费检测维修',
        '优先维修服务',
        '备用机服务',
        '定期保养维护',
        '上门服务支持'
      ],
      price: '￥399起/年',
      time: '全年服务'
    },
    {
      icon: 'cleaning_services',
      title: '电脑清洁保养',
      description: '专业的电脑清洁保养服务，延长设备使用寿命，保持最佳使用状态。',
      features: [
        '深度清洁除尘',
        '散热系统清理',
        '键盘深度清洁',
        '屏幕专业清洁',
        '接口清洁保养',
        '导热硅脂更换'
      ],
      price: '￥40起',
      time: '30分钟-1小时'
    },
    {
      icon: 'restore',
      title: '电脑系统重装',
      description: '专业的系统重装服务，解决系统顽固问题，提供纯净稳定的使用环境。',
      features: [
        '系统备份还原',
        '深度系统清理',
        '驱动程序安装',
        '软件环境配置',
        '数据迁移服务',
        '远程技术支持'
      ],
      price: '￥80起',
      time: '2-3小时'
    },
    {
      icon: 'storage',
      title: '数据恢复服务',
      description: '专业的数据恢复服务，针对各类数据丢失情况提供专业的恢复方案。',
      features: [
        '误删数据恢复',
        '硬盘数据恢复',
        '分区表修复',
        '文件系统修复',
        '固态硬盘恢复',
        'RAID数据恢复'
      ],
      price: '￥699起',
      time: '24-72小时'
    },
    {
      icon: 'recycling',
      title: '资产回收服务',
      description: '专业的电子设备回收服务，提供旧设备回收、数据安全销毁等服务。',
      features: [
        '整机回收服务',
        '配件回收服务',
        '数据安全销毁',
        '环保处理服务',
        '高价回收估价',
        '上门回收服务'
      ],
      price: '具体询价',
      time: '当天完成'
    }
  ];

  const caseStudies = [
    {
      title: '某大型金融机构IT基础设施升级',
      industry: '金融行业',
      category: 'finance',
      image: 'https://www.microswift.top/halo/06/case1.jpg',
      description: '为客户提供全面的IT基础设施升级解决方案，实现系统性能提升和安全保障。',
      highlights: [
        '系统性能提升40%',
        '运维成本降低30%',
        '安全事件响应提速50%',
        '服务可用性达99.99%'
      ]
    },
    {
      title: '全国连锁教育机构数字化转型',
      industry: '教育行业',
      category: 'education',
      image: 'https://www.microswift.top/halo/06/case2.jpg',
      description: '助力教育机构实现数字化转型，打造智慧校园解决方案。',
      highlights: [
        '教学效率提升35%',
        '管理成本降低25%',
        '师生满意度提升40%',
        '运营效率提升50%'
      ]
    },
    {
      title: '三甲医院智慧医疗系统升级',
      industry: '医疗行业',
      category: 'medical',
      image: 'https://www.microswift.top/halo/06/case3.jpg',
      description: '为医院提供智慧医疗解决方案，提升医疗服务质量和效率。',
      highlights: [
        '就诊等待时间减少60%',
        '医疗记录数字化率99%',
        '诊疗效率提升45%',
        '患者满意度提升55%'
      ]
    },
    {
      title: '大型零售连锁店智能化改造',
      industry: '零售行业',
      category: 'retail',
      image: 'https://www.microswift.top/halo/06/case4.jpg',
      description: '为零售企业打造智能化运营系统，实现全渠道数字化转型。',
      highlights: [
        '库存周转率提升25%',
        '运营成本降低35%',
        '客户转化率提升30%',
        '会员复购率提升40%'
      ]
    },
    {
      title: '制造业生产线智能化升级',
      industry: '制造行业',
      category: 'manufacture',
      image: 'https://www.microswift.top/halo/06/case5.jpg',
      description: '为制造企业提供智能制造解决方案，提升生产效率和产品质量。',
      highlights: [
        '生产效率提升50%',
        '产品不良率降低60%',
        '能源成本降低30%',
        '设备利用率提升45%'
      ]
    },
    {
      title: '某银行核心系统安全升级',
      industry: '金融行业',
      category: 'finance',
      image: 'https://www.microswift.top/halo/06/case6.jpg',
      description: '为银行提供核心系统安全升级方案，提升系统安全性和可靠性。',
      highlights: [
        '系统安全等级提升',
        '故障响应时间降低70%',
        '业务连续性提升99.999%',
        '运维效率提升65%'
      ]
    },
    {
      title: '高校智慧教室建设项目',
      industry: '教育行业',
      category: 'education',
      image: 'https://www.microswift.top/halo/06/case7.jpg',
      description: '为高校打造智慧教室解决方案，提升教学体验和效果。',
      highlights: [
        '课堂互动率提升80%',
        '教学资源利用率提升60%',
        '学习效果提升45%',
        '师生满意度95%'
      ]
    },
    {
      title: '社区医院远程诊疗平台',
      industry: '医疗行业',
      category: 'medical',
      image: 'https://www.microswift.top/halo/06/case8.jpg',
      description: '构建社区医院远程诊疗平台，提供便捷医疗服务。',
      highlights: [
        '服务覆盖率提升75%',
        '就医成本降低40%',
        '诊疗效率提升50%',
        '患者满意度90%'
      ]
    },
    {
      title: '新零售数字化运营平台',
      industry: '零售行业',
      category: 'retail',
      image: 'https://www.microswift.top/halo/06/case9.jpg',
      description: '打造新零售数字化运营平台，实现线上线下一体化运营。',
      highlights: [
        '全渠道销售提升45%',
        '运营成本降低30%',
        '客户体验提升55%',
        '数据分析效率提升70%'
      ]
    },
    {
      title: '智能工厂数字化转型',
      industry: '制造行业',
      category: 'manufacture',
      image: 'https://www.microswift.top/halo/06/case10.jpg',
      description: '助力工厂实现数字化转型，打造智能制造示范工厂。',
      highlights: [
        '生产效率提升65%',
        '质量控制准确率99%',
        '库存周转率提升40%',
        '能源使用效率提升50%'
      ]
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">精准聚焦各行业客户需求</h1>
          <p className="hero-subtitle">
            助力个人或企业降本增效，打造智能化、数字化的未来
          </p>
        </div>
      </section>

      {/* Cooperation Process */}
      <section className="cooperation-section">
        <div className="container">
          <h2 className="section-title">合作流程</h2>
          <p className="section-description">
            专业的服务团队，标准化的合作流程，确保项目顺利交付
          </p>
          
          <div className="cooperation-steps" ref={stepsRef}>
            {cooperationSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-icon">
                  <Icon name={step.icon} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-number">{index + 1}</div>
                {index < cooperationSteps.length - 1 && (
                  <div className="step-connector">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">服务内容</h2>
          <p className="section-description">
            专业的技术团队，为您提供全方位的硬件升级与软件优化服务
          </p>
          <ServiceTabs items={serviceItems} />
        </div>
      </section>

      <AdvantagesTabs />

      <section className="case-section">
        <div className="container">
          <h2 className="section-title">服务案例</h2>
          <p className="section-description">
            深耕行业多年，为众多企业提供专业的IT服务解决方案
          </p>
          <CaseStudies items={caseStudies} />
        </div>
      </section>

      {/* CTA Section - 移到最后 */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">寻找适合您的解决方案</h2>
          <p className="cta-description">
            我们的专家团队随时为您提供专业咨询和支持
          </p>
          <div className="cta-buttons">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => setShowContactModal(true)}
            >
              联系我们
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={handleViewCases}
            >
              查看案例
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </div>
  );
};

export default Products; 