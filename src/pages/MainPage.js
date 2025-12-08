import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import ContentCard from '../components/ContentCard';

const MainPage = () => {
  // Example video data - replace with your actual content
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

  // Example blog post data - replace with your actual content
  const recentPosts = [
    {
      title: 'Getting Started with Test Automation',
      description: 'Learn the fundamentals of test automation and why it matters for your development workflow',
      date: 'December 5, 2024',
      tags: ['testing', 'automation', 'tutorial'],
      link: '#'
    },
    {
      title: 'JavaScript Modern Patterns',
      description: 'Exploring modern JavaScript patterns and best practices for scalable applications',
      date: 'November 28, 2024',
      tags: ['javascript', 'patterns', 'best-practices'],
      link: '#'
    },
    {
      title: 'Building Accessible Web Apps',
      description: 'A comprehensive guide to building accessible and inclusive web applications',
      date: 'November 20, 2024',
      tags: ['accessibility', 'a11y', 'webdev'],
      link: '#'
    }
  ];

  return (
    <>
      <Header />
      
      <main>
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
      </main>
      
      <Footer />
    </>
  );
};

export default MainPage;