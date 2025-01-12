import React from 'react';
import './Form.css';

const Checkbox = ({
  label,
  error,
  className = '',
  ...props
}) => {
  const checkboxClass = `
    form-checkbox
    ${error ? 'checkbox-error' : ''}
    ${className}
  `.trim();

  return (
    <label className="checkbox-field">
      <input type="checkbox" className={checkboxClass} {...props} />
      <span className="checkbox-custom"></span>
      {label && <span className="checkbox-label">{label}</span>}
      {error && <span className="form-error">{error}</span>}
    </label>
  );
};

export default Checkbox; 