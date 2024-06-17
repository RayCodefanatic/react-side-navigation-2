import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Accordion = ({ title, childrenItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      {isOpen && (
        <div className="accordion-content">
          {childrenItems.map((item, index) => (
            <NavLink key={index} to={`/${item.path}`} className="nav-link">
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
