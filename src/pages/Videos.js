import React from 'react';
import ContentSection from '../components/ContentSection';
import ContentCard from '../components/ContentCard';

const Videos = () => {
  const videos = [
    {
      title: 'JavaScript Testing Best Practices',
      description: 'Learn essential testing patterns for modern JavaScript applications',
      date: 'December 2025',
      tags: ['javascript', 'testing', 'automation'],
      link: 'https://youtube.com',
      image: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=Video+1'
    },
    {
      title: 'MCP with AI Tools',
      description: 'A comprehensive guide to building production-ready React applications',
      date: 'November 2025',
      tags: ['ai', 'mcp', 'web3'],
      link: 'https://youtube.com',
      image: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=Video+2'
    }
  ];

  return (
    <ContentSection title="All Videos">
      {videos.map((video, index) => (
        <ContentCard
          key={index}
          title={video.title}
          description={video.description}
          date={video.date}
          tags={video.tags}
          link={video.link}
          image={video.image}
        />
      ))}
    </ContentSection>
  );
};

export default Videos;