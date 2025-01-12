import React from 'react';
import './Skeleton.css';

export const Skeleton = ({
  variant = 'text',
  width,
  height,
  circle = false,
  rows = 1,
  animation = 'wave',
  className = ''
}) => {
  const renderRows = () => {
    return Array(rows)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className={`
            skeleton
            skeleton-${variant}
            skeleton-${animation}
            ${circle ? 'skeleton-circle' : ''}
            ${className}
          `}
          style={{
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height
          }}
        />
      ));
  };

  return rows > 1 ? (
    <div className="skeleton-rows">{renderRows()}</div>
  ) : (
    renderRows()[0]
  );
};

// 预定义骨架屏
export const SkeletonAvatar = ({
  size = 40,
  animation = 'wave',
  className = ''
}) => {
  return (
    <Skeleton
      variant="avatar"
      width={size}
      height={size}
      circle
      animation={animation}
      className={className}
    />
  );
};

export const SkeletonText = ({
  rows = 3,
  width = '100%',
  animation = 'wave',
  className = ''
}) => {
  return (
    <Skeleton
      variant="text"
      width={width}
      rows={rows}
      animation={animation}
      className={className}
    />
  );
};

export const SkeletonImage = ({
  width = '100%',
  height = 200,
  animation = 'wave',
  className = ''
}) => {
  return (
    <Skeleton
      variant="image"
      width={width}
      height={height}
      animation={animation}
      className={className}
    />
  );
};

// 卡片骨架屏
export const SkeletonCard = ({
  imageHeight = 200,
  animation = 'wave',
  className = ''
}) => {
  return (
    <div className={`skeleton-card ${className}`}>
      <SkeletonImage height={imageHeight} animation={animation} />
      <div className="skeleton-card-content">
        <SkeletonText rows={3} animation={animation} />
      </div>
    </div>
  );
};

// 列表骨架屏
export const SkeletonList = ({
  rows = 5,
  animation = 'wave',
  className = ''
}) => {
  return (
    <div className={`skeleton-list ${className}`}>
      {Array(rows)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="skeleton-list-item">
            <SkeletonAvatar animation={animation} />
            <div className="skeleton-list-content">
              <SkeletonText rows={2} animation={animation} />
            </div>
          </div>
        ))}
    </div>
  );
}; 