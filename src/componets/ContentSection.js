import React from 'react';
import '../styles/ContentSection.css';

const ContentSection = ({ title, linkUrl, linkText, children }) => {
  return (
    <section className="content-section">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {linkUrl && (
            <a href={linkUrl} className="section-link">
              {linkText || 'View all →'}
            </a>
          )}
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;