import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';
import ContactModal from '../ContactModal/ContactModal';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      label: '首页',
      path: '/'
    },
    {
      label: '诚信',
      path: '/integrity',
      children: [
        { label: '我们的原则', path: '/integrity#principles' },
        { label: '诚信发展', path: '/integrity#timeline' },
        { label: '我们的承诺', path: '/integrity#commitments' },
        { label: '透明度报告', path: '/integrity#reports' }
      ]
    },
    {
      label: '服务',
      path: '/products',
      children: [
        { label: '解决方案', path: '/products/solutions' },
        { label: '产品中心', path: '/products/center' },
        { label: '服务支持', path: '/products/support' }
      ]
    },
    {
      label: '关于',
      path: '/about',
      children: [
        { label: '公司简介', path: '/about/introduction' },
        { label: '发展历程', path: '/about/history' },
        { label: '企业文化', path: '/about/culture' }
      ]
    },
    {
      label: '故事',
      path: '/stories',
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    const [basePath, hash] = path.split('#');
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
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
              {menuItems.map((item, index) => (
                <li 
                  key={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link 
                    to={item.path} 
                    className="nav-link"
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.label}
                    {item.children && <Icon name="expand_more" />}
                  </Link>
                  {item.children && activeDropdown === index && (
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.path} className="dropdown-item">
                          <Link 
                            to={child.path}
                            className="dropdown-link"
                            onClick={() => handleNavClick(child.path)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button 
              className="contact-button"
              onClick={() => setIsContactModalOpen(true)}
            >
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

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Header; 