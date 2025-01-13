import React from 'react';
import classNames from '../classnames';
import './Result.css';

export const Result = ({
  icon,
  title,
  subTitle,
  extra,
  status = 'info',
  className,
  ...props
}) => {
  return (
    <div 
      className={classNames(
        'result',
        `result-${status}`,
        className
      )} 
      {...props}
    >
      {icon && <div className="result-icon">{icon}</div>}
      {title && <div className="result-title">{title}</div>}
      {subTitle && <div className="result-subtitle">{subTitle}</div>}
      {extra && <div className="result-extra">{extra}</div>}
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