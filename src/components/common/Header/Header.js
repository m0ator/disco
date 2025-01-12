import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: '首页', path: '/' },
    { 
      label: '产品', 
      path: '/products',
      children: [
        { label: '智能制造', path: '/products', hash: '#manufacturing' },
        { label: '数据分析', path: '/products', hash: '#analytics' },
        { label: '解决方案', path: '/products', hash: '#solutions' },
        { label: '技术特点', path: '/products', hash: '#features' },
        { label: '合作流程', path: '/products', hash: '#process' }
      ]
    },
    { 
      label: '关于', 
      path: '/about',
      children: [
        { label: '我们的使命', path: '/about', hash: '#mission' },
        { label: '我们的价值观', path: '/about', hash: '#values' },
        { label: '我们的团队', path: '/about', hash: '#team' }
      ]
    },
    { label: '故事', path: '/stories' },
    { 
      label: '诚信', 
      path: '/integrity',
      children: [
        { label: '商业道德', path: '/integrity', hash: '#ethics' },
        { label: '合规承诺', path: '/integrity', hash: '#compliance' }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path, hash) => {
    setIsMenuOpen(false);
    if (hash) {
      navigate(path);
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80; // 根据实际header高度调整
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img 
            src="https://www.microswift.top/halo/06/ylvjraex.png" 
            alt="微讯云" 
            className="logo-img"
          />
        </Link>

        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li 
                key={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <Link 
                  to={item.path} 
                  className="nav-link"
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                  {item.children && (
                    <Icon 
                      name="expand_more" 
                      className="nav-icon"
                    />
                  )}
                </Link>
                
                {item.children && (
                  <div className="dropdown-menu">
                    {item.children.map((child) => (
                      <button
                        key={child.hash || child.path}
                        className="dropdown-item"
                        onClick={() => handleNavClick(child.path, child.hash)}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="action-button">
            <Icon name="search" />
          </button>
          <button className="action-button">
            <Icon name="language" />
          </button>
          <button className="contact-button">
            联系我们
            <Icon name="arrow_forward" />
          </button>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 