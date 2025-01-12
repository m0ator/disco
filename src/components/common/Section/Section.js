import React from 'react';
import './Section.css';

const Section = ({ children, className, background }) => {
  const sectionClass = `section ${className || ''} ${background ? `bg-${background}` : ''}`;
  
  return (
    <section className={sectionClass}>
      {children}
    </section>
  );
};

export default Section; 