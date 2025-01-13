import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import './SearchBar.css';

const SearchBar = ({ placeholder = '搜索...', onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSearch(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <Icon name="search" className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          {value && (
            <button
              type="button"
              className="clear-button"
              onClick={() => setValue('')}
              aria-label="清除搜索"
            >
              <Icon name="close" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar; 