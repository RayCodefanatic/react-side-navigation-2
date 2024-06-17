import React from 'react';

const HamburgerMenu = ({ toggleMenu }) => {
  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      &#9776;
    </div>
  );
};

export default HamburgerMenu;
