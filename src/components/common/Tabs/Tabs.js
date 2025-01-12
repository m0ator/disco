import React, { useState } from 'react';
import './Tabs.css';

export const TabContext = React.createContext();

export const Tabs = ({ 
  children, 
  defaultValue,
  onChange,
  variant = 'default',
  className = '' 
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (newValue) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <TabContext.Provider value={{ value, onChange: handleChange }}>
      <div className={`tabs tabs-${variant} ${className}`}>
        {children}
      </div>
    </TabContext.Provider>
  );
};

export const TabList = ({ children, className = '' }) => {
  return (
    <div className={`tab-list ${className}`} role="tablist">
      {children}
    </div>
  );
};

export const Tab = ({ value, children, className = '' }) => {
  const { value: selectedValue, onChange } = React.useContext(TabContext);
  
  return (
    <button
      role="tab"
      className={`tab ${selectedValue === value ? 'tab-selected' : ''} ${className}`}
      onClick={() => onChange(value)}
      aria-selected={selectedValue === value}
    >
      {children}
    </button>
  );
};

export const TabPanels = ({ children, className = '' }) => {
  return (
    <div className={`tab-panels ${className}`}>
      {children}
    </div>
  );
};

export const TabPanel = ({ value, children, className = '' }) => {
  const { value: selectedValue } = React.useContext(TabContext);

  if (value !== selectedValue) return null;

  return (
    <div role="tabpanel" className={`tab-panel ${className}`}>
      {children}
    </div>
  );
}; 