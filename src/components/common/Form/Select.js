import React, { useState } from 'react';
import Icon from '../Icon/Icon';
import './Select.css';

const Select = ({
  options = [],
  value,
  onChange,
  placeholder = '请选择',
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`select ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}>
      <button
        className="select-trigger"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        type="button"
      >
        <span className="select-value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <Icon name="expand_more" />
      </button>
      
      {isOpen && !disabled && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              key={option.value}
              className={`select-option ${option.value === value ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select; 