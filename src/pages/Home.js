import React from 'react';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import ContentCard from '../components/ContentCard';

const Home = () => {
  const recentVideos = [
    {
      title: 'JavaScript Testing Best Practices',
      description: 'Learn essential testing patterns for modern JavaScript applications',
      date: 'December 2024',
      tags: ['javascript', 'testing', 'automation'],
      link: 'https://youtube.com',
      image: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=Video+1'
    },
    {
      title: 'Building Modern React Apps',
      description: 'A comprehensive guide to building production-ready React applications',
      date: 'November 2024',
      tags: ['react', 'frontend', 'webdev'],
      link: 'https://youtube.com',
      image: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=Video+2'
    },
    {
      title: 'Test Automation with Playwright',
      description: 'Complete tutorial on end-to-end testing with Playwright',
      date: 'November 2024',
      tags: ['playwright', 'testing', 'e2e'],
      link: 'https://youtube.com',
      image: 'https://via.placeholder.com/400x225/3b82f6/ffffff?text=Video+3'
    }
  ];

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
        title="Recent Videos" 
        linkUrl="/videos"
        linkText="View all videos"
      >
        {recentVideos.map((video, index) => (
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