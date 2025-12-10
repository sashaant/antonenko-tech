import React from 'react';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import ContentCard from '../components/ContentCard';

const Home = () => {
  const recentPosts = [
    {
      title: 'Getting Started with Test Automation',
      description: 'Learn the fundamentals of test automation and why it matters',
      date: 'December 5, 2024',
      tags: ['testing', 'automation', 'tutorial'],
      link: '/blog/getting-started-with-test-automation'
    },
    {
      title: 'JavaScript Modern Patterns',
      description: 'Exploring modern JavaScript patterns for scalable applications',
      date: 'November 28, 2024',
      tags: ['javascript', 'patterns', 'best-practices'],
      link: '/blog/javascript-modern-patterns'
    },
    {
      title: 'Building Accessible Web Apps',
      description: 'A comprehensive guide to building accessible web applications',
      date: 'November 20, 2024',
      tags: ['accessibility', 'a11y', 'webdev'],
      link: '/blog/building-accessible-web-apps'
    }
  ];

  return (
    <>
      <HeroSection />

      <ContentSection 
        title="Recent Blog Posts" 
        linkUrl="/blog"
        linkText="View all posts"
      >
        {recentPosts.map((post, index) => (
          <ContentCard
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}
            link={post.link}
          />
        ))}
      </ContentSection>
    </>
  );
};

export default Home;