import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from './Accordion';
import HamburgerMenu from './HamburgerMenu';

const navItems = [
  {
    title: 'APPLICATION',
    childrens: [{ title: 'Application Analysis', path: 'applicationAnalysis' }],
  },
  {
    title: 'TRANSACTIONS',
    childrens: [{ title: 'Transaction Detail', path: 'transDetailedReport' }],
  },
  {
    title: 'FUNDING',
    childrens: [{ title: 'Summary Report', path: 'summaryReport' }],
  },
  { title: 'Download Center', path: 'downloadcenter' },
  { title: 'Website User Activity', path: 'webUserActivity' },
];

const SideNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <HamburgerMenu toggleMenu={toggleMenu} />
      <nav className={`side-nav ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) =>
          item.childrens ? (
            <Accordion
              key={index}
              title={item.title}
              childrenItems={item.childrens}
            />
          ) : (
            <NavLink key={index} to={`/${item.path}`} className="nav-link">
              {item.title}
            </NavLink>
          )
        )}
      </nav>
    </div>
  );
};

export default SideNav;
