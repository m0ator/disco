import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    {
      title: '关于我们',
      links: [
        { label: '公司简介', path: '/about#company' },
        { label: '使命愿景', path: '/about#mission' },
        { label: '发展历程', path: '/about#history' },
        { label: '管理团队', path: '/about#team' }
      ]
    },
    {
      title: '诚信建设',
      links: [
        { label: '商业道德', path: '/integrity#ethics' },
        { label: '合规承诺', path: '/integrity#compliance' },
        { label: '隐私政策', path: '/privacy' },
        { label: '服务条款', path: '/terms' }
      ]
    },
    {
      title: '精彩故事',
      links: [
        { label: '创新故事', path: '/stories/innovation' },
        { label: '客户案例', path: '/stories/cases' },
        { label: '员工故事', path: '/stories/employees' },
        { label: '社会责任', path: '/stories/csr' }
      ]
    }
  ];

  const socialLinks = [
    {
      name: '微信',
      icon: 'wechat', 
      url: '#'
    },
    {
      name: '抖音',
      icon: 'tiktok',
      url: 'https://douyin.com/company'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="https://www.microswift.top/halo/06/ylvjraex.png" alt="Logo" />
            </Link>
            <p className="footer-slogan">
            秉持 “ 软件用起来才有价值，才有改进的机会 ” 的核心理念
            </p>
            <div className="footer-social">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className="social-icon" />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-links">
            {footerLinks.map((group) => (
              <div key={group.title} className="footer-group">
                <h3 className="group-title">{group.title}</h3>
                <ul className="group-links">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <span>© 2020微讯云信息</span>
            <Link to="/privacy">隐私政策</Link>
            <Link to="/terms">服务条款</Link>
            <Link to="/terms">互联网新媒体平台公约</Link>
            <a 
              href="https://beian.miit.gov.cn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="beian-link"
            >
              陇ICP备20002844号-1
            </a>
            <a 
              href="http://www.beian.gov.cn/portal/registerSystemInfo"
              target="_blank" 
              rel="noopener noreferrer"
              className="beian-link police-beian"
            >
              <img src="https://www.beian.gov.cn/img/ghs.png" alt="公安备案图标" />
              甘公网安备 62090202000540号
            </a>
          </div>
          
          <div className="footer-locale">
            <button className="locale-switch">
              <Icon name="language" />
              <span>简体中文</span>
            </button>
            <button className="locale-switch">
              <Icon name="public" />
              <span>中国@酒泉</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 