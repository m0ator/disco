import React from 'react';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import './Empty.css';

export const Empty = ({
  image,
  icon = 'inbox',
  title = '暂无数据',
  description,
  action,
  className = ''
}) => {
  return (
    <div className={`empty ${className}`}>
      {image ? (
        <img src={image} alt={title} className="empty-image" />
      ) : (
        <div className="empty-icon">
          <Icon name={icon} />
        </div>
      )}
      
      <div className="empty-content">
        <h3 className="empty-title">{title}</h3>
        {description && (
          <p className="empty-description">{description}</p>
        )}
      </div>

      {action && (
        <div className="empty-action">
          {typeof action === 'function' ? action() : action}
        </div>
      )}
    </div>
  );
};

// 预定义空状态
export const NoData = (props) => (
  <Empty
    icon="inbox"
    title="暂无数据"
    description="当前暂无相关数据"
    {...props}
  />
);

export const NoResult = (props) => (
  <Empty
    icon="search_off"
    title="无搜索结果"
    description="没有找到匹配的搜索结果"
    {...props}
  />
);

export const NoAccess = (props) => (
  <Empty
    icon="block"
    title="暂无权限"
    description="您暂无权限访问此内容"
    action={
      <Button variant="primary">
        申请权限
      </Button>
    }
    {...props}
  />
);

export const NetworkError = (props) => (
  <Empty
    icon="wifi_off"
    title="网络错误"
    description="网络连接失败，请检查网络设置"
    action={
      <Button onClick={() => window.location.reload()}>
        重新加载
      </Button>
    }
    {...props}
  />
); 