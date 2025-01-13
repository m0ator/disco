import React from 'react';
import './Section.css';

export const Section = ({ id, className, children, ...props }) => {
  return (
    <section 
      id={id}
      className={`section ${className || ''}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section; 