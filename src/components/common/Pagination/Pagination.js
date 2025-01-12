import React from 'react';
import { Icon } from '../Icon/Icon';
import './Pagination.css';

export const Pagination = ({
  current = 1,
  total = 0,
  pageSize = 10,
  showSizeChanger = true,
  showQuickJumper = true,
  showTotal = true,
  onChange,
  onPageSizeChange,
  className = ''
}) => {
  const totalPages = Math.ceil(total / pageSize);
  const pageSizeOptions = [10, 20, 50, 100];

  const handleChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onChange?.(page, pageSize);
  };

  const handlePageSizeChange = (e) => {
    const newSize = Number(e.target.value);
    const newPage = Math.ceil((current * pageSize) / newSize);
    onPageSizeChange?.(newSize, newPage);
  };

  const handleJump = (e) => {
    if (e.key === 'Enter') {
      const page = Number(e.target.value);
      if (page && page >= 1 && page <= totalPages) {
        handleChange(page);
        e.target.value = '';
      }
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxButtons = 5;
    let start = Math.max(1, current - Math.floor(maxButtons / 2));
    let end = Math.min(totalPages, start + maxButtons - 1);

    if (end - start + 1 < maxButtons) {
      start = Math.max(1, end - maxButtons + 1);
    }

    if (start > 1) {
      pages.push(
        <button key={1} onClick={() => handleChange(1)}>1</button>
      );
      if (start > 2) {
        pages.push(
          <span key="left-ellipsis" className="ellipsis">...</span>
        );
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          className={current === i ? 'active' : ''}
          onClick={() => handleChange(i)}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(
          <span key="right-ellipsis" className="ellipsis">...</span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handleChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={`pagination ${className}`}>
      {showTotal && (
        <span className="pagination-total">
          共 {total} 条
        </span>
      )}

      <div className="pagination-pages">
        <button
          className="pagination-prev"
          disabled={current === 1}
          onClick={() => handleChange(current - 1)}
        >
          <Icon name="chevron_left" />
        </button>

        {renderPageNumbers()}

        <button
          className="pagination-next"
          disabled={current === totalPages}
          onClick={() => handleChange(current + 1)}
        >
          <Icon name="chevron_right" />
        </button>
      </div>

      {showSizeChanger && (
        <select
          className="pagination-size"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          {pageSizeOptions.map(size => (
            <option key={size} value={size}>
              {size} 条/页
            </option>
          ))}
        </select>
      )}

      {showQuickJumper && (
        <div className="pagination-jumper">
          跳至
          <input
            type="number"
            min={1}
            max={totalPages}
            onKeyPress={handleJump}
          />
          页
        </div>
      )}
    </div>
  );
}; 