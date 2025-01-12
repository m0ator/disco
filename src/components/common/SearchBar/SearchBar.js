import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import './SearchBar.css';

export const SearchBar = ({
  placeholder = '搜索',
  suggestions = [],
  onSearch,
  onSuggestionClick,
  className = ''
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // 延迟隐藏建议列表，以便可以点击
    setTimeout(() => setShowSuggestions(false), 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={searchRef}
      className={`search-container ${isFocused ? 'focused' : ''} ${className}`}
    >
      <form onSubmit={handleSubmit} className="search-form">
        <Icon name="search" className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {query && (
          <button 
            type="button" 
            className="search-clear"
            onClick={() => setQuery('')}
          >
            <Icon name="close" />
          </button>
        )}
        <button type="submit" className="search-submit">
          搜索
        </button>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="suggestion-item"
              onClick={() => {
                setQuery(suggestion);
                onSuggestionClick?.(suggestion);
              }}
            >
              <Icon name="search" className="suggestion-icon" />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}; 