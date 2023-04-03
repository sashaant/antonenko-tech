import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="Header">
      <div className="Header__logo">Sasha Antonenko</div>
      <nav className={`Header__nav ${showMenu ? 'show' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={`Header__hamburger ${showMenu ? 'open' : ''}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;