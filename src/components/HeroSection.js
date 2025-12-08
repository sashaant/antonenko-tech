import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-name">Oleksandr Antonenko</h1>
        <p className="hero-title">JS Evangelist in Development and Testing Apps</p>
        
        <div className="hero-badges">
          <a 
            href="https://jabra.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="badge"
          >
            JABRA
          </a>
          <span className="badge">
            Test Automation Expert
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;