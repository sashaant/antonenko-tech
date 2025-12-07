import React from 'react';
import '../styles/ContentCard.css';

const ContentCard = ({ 
  image, 
  title, 
  description, 
  date, 
  tags, 
  link 
}) => {
  return (
    <a href={link} className="content-card" target="_blank" rel="noopener noreferrer">
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        {description && (
          <p className="card-description">{description}</p>
        )}
        
        {date && (
          <p className="card-date">{date}</p>
        )}
        
        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

export default ContentCard;