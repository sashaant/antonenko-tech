import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <div className={`navbar ${isDarkTheme ? 'dark-theme' : ''}`}>
        {/* <div className="navbar-foto"></div> */}
        <div className="navbar-title">Sasha Antonenko</div>
            {/* <button onClick={toggleDarkTheme}>
            {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            </button> */}
        {/* <div className="navbar-menu">
          <ul>
            <li>About</li>
            <li>Podcast</li>
            <li>Blog</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};


export default Navbar;
