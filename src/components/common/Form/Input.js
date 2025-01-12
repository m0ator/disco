import React from 'react';
import './Form.css';

const Input = ({
  type = 'text',
  label,
  error,
  className = '',
  ...props
}) => {
  const inputClass = `
    form-input
    ${error ? 'input-error' : ''}
    ${className}
  `.trim();

  return (
    <div className="form-field">
      {label && <label className="form-label">{label}</label>}
      <input type={type} className={inputClass} {...props} />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default Input; 