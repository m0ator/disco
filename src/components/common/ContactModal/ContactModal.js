import React from 'react';
import Icon from '../Icon/Icon';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`contact-modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <Icon name="close" />
        </button>
        
        <div className="contact-info-section">
          <div className="modal-header">
            <h2 className="modal-title">联系我们</h2>
            <p className="modal-subtitle">致电，是一切业务的起点</p>
          </div>

          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-icon">
                <Icon name="business" />
              </div>
              <div className="contact-info">
                <div className="contact-label">公司名称</div>
                <div className="contact-value">
                  微讯云信息<br />
                  甘肃省微讯云信息技术服务有限责任公司
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Icon name="location_on" />
              </div>
              <div className="contact-info">
                <div className="contact-label">地址</div>
                <div className="contact-value">
                  甘肃省酒泉市肃州区南城巷8号1-1-3<br />
                  彩虹桥北门对面
                </div>
                <a 
                  href="https://surl.amap.com/LHEdPjT0Ik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Icon name="directions" />
                  查看高德地图导航
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Icon name="phone" />
              </div>
              <div className="contact-info">
                <div className="contact-label">电话</div>
                <div className="contact-value">0937-2668830</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Icon name="email" />
              </div>
              <div className="contact-info">
                <div className="contact-label">邮箱</div>
                <div className="contact-value">weixun@microswift.cn</div>
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
  );
};

export default ContactModal; 