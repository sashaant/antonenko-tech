
import "./Navbar.css";

import React, { useState } from 'react';

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className={`fas fa-bars ${showMenu ? 'open' : ''}`} />
      </div>
      {showMenu && (
        <ul className="menu-dropdown">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
      <button onClick={toggleDarkTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </nav>
  );
};

export default Navbar;
