import React from 'react';
import { Icon } from '../Icon/Icon';
import './Result.css';

export const Result = ({
  status = 'info',
  title,
  subTitle,
  icon,
  extra,
  children,
  className = ''
}) => {
  const getIcon = () => {
    if (icon) return icon;
    
    switch (status) {
      case 'success':
        return <Icon name="check_circle" />;
      case 'error':
        return <Icon name="error" />;
      case 'warning':
        return <Icon name="warning" />;
      case 'info':
        return <Icon name="info" />;
      default:
        return null;
    }
  };

  return (
    <div className={`result result-${status} ${className}`}>
      <div className="result-icon">
        {getIcon()}
      </div>

      <div className="result-content">
        {title && <div className="result-title">{title}</div>}
        {subTitle && <div className="result-subtitle">{subTitle}</div>}
        {children && <div className="result-extra">{children}</div>}
      </div>

      {extra && <div className="result-actions">{extra}</div>}
    </div>
  );
};

// 预定义结果页
export const SuccessResult = ({
  title = '操作成功',
  subTitle = '您的操作已成功完成',
  ...props
}) => (
  <Result
    status="success"
    title={title}
    subTitle={subTitle}
    {...props}
  />
);

export const ErrorResult = ({
  title = '操作失败',
  subTitle = '抱歉，您的操作未能完成',
  ...props
}) => (
  <Result
    status="error"
    title={title}
    subTitle={subTitle}
    {...props}
  />
);

export const WarningResult = ({
  title = '警告提示',
  subTitle = '请注意相关风险',
  ...props
}) => (
  <Result
    status="warning"
    title={title}
    subTitle={subTitle}
    {...props}
  />
);

export const InfoResult = ({
  title = '提示信息',
  subTitle = '这是一条提示信息',
  ...props
}) => (
  <Result
    status="info"
    title={title}
    subTitle={subTitle}
    {...props}
  />
); 