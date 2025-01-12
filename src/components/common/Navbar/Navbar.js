import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import './Navbar.css';

export const Navbar = ({ 
  logo,
  menuItems = [],
  actions = [],
  className = '' 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭移动菜单当路由改变时
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`
        navbar 
        ${isScrolled ? 'navbar-scrolled' : ''} 
        ${isMobileMenuOpen ? 'navbar-mobile-open' : ''}
        ${className}
      `}
    >
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            {logo}
          </Link>

          <nav className="navbar-nav">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`
                  nav-link 
                  ${location.pathname === item.path ? 'nav-link-active' : ''}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="navbar-right">
          {actions.map((action, index) => (
            <Button key={index} {...action} />
          ))}

          <button 
            className="navbar-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className="navbar-mobile">
        <nav className="mobile-nav">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`
                mobile-nav-link
                ${location.pathname === item.path ? 'mobile-nav-link-active' : ''}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-actions">
          {actions.map((action, index) => (
            <Button key={index} {...action} fullWidth />
          ))}
        </div>
      </div>
    </header>
  );
}; 