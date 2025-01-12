import React from 'react';
import Icon from '../Icon/Icon';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose}>
          <Icon name="close" />
        </button>
        
        <div className="contact-modal-content">
          <div className="contact-info">
            <div className="contact-header">
              <h2 className="contact-title">联系我们</h2>
              <p className="contact-subtitle">致电，是一切业务的起点</p>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <Icon name="business" />
                <div className="contact-text">
                  <h3>公司名称</h3>
                  <p>微讯云信息</p>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="location_on" />
                <div className="contact-text">
                  <h3>地址</h3>
                  <p>甘肃省酒泉市肃州区南城巷8号1-1-3</p>
                  <p>彩虹桥北门对面</p>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="phone" />
                <div className="contact-text">
                  <h3>电话</h3>
                  <p>0937-2668831</p>
                </div>
              </div>
              <div className="contact-item">
                <Icon name="email" />
                <div className="contact-text">
                  <h3>邮箱</h3>
                  <p>weixun@microswift.cn</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-image">
            <img 
              src="https://www.microswift.top/halo/12/vrnxbddt.png" 
              alt="联系我们"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 