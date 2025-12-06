import React from 'react';
import '../styles/HeroSection.css';
import profileImage from '../images/foto.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Profile Image */}
        <div className="hero-image">
          <img 
            src={profileImage} 
            alt="Oleksandr Antonenko" 
            className="hero-avatar"
          />
        </div>

        {/* Name & Title */}
        <h1 className="hero-name">Oleksandr Antonenko</h1>
        <p className="hero-title">JS Evangelist in Development and Testing Apps</p>

        {/* Badges / Credentials */}
        <div className="hero-badges">
          <a 
            href="https://jabra.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="badge"
          >
            Making impossible at JABRA
          </a>
          <a 
            href="#" 
            className="badge"
          >
            Test Automation Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;