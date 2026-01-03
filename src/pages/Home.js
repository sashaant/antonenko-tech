import React from 'react';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import ContentCard from '../components/ContentCard';

const Home = () => {
  const recentPosts = [
    {
      title: 'Getting Started with Test Automation in JavaScript',
      description: 'A comprehensive guide to setting up automated testing in your JavaScript projects using Jest and Playwright. Learn best practices, common pitfalls, and how to write maintainable tests.',
      date: 'January 2, 2025',
      tags: ['testing', 'automation', 'javascript', 'jest'],
      link: '/blog/getting-started-test-automation'
    },
    {
      title: 'Building Scalable React Applications: Lessons Learned',
      description: 'After building multiple React applications at scale, I share key architectural decisions, state management strategies, and performance optimization techniques that actually work in production.',
      date: 'December 28, 2024',
      tags: ['react', 'architecture', 'performance', 'best-practices'],
      link: '/blog/scalable-react-applications'
    },
    {
      title: 'Modern JavaScript Patterns You Should Know in 2025',
      description: 'Explore the latest JavaScript patterns and features that are changing how we write code. From optional chaining to async patterns, discover what makes modern JavaScript so powerful.',
      date: 'December 20, 2024',
      tags: ['javascript', 'es2024', 'patterns', 'modern-js'],
      link: '/blog/modern-javascript-patterns-2025'
    },
    {
      title: 'Why E2E Testing Matters: A Practical Guide',
      description: 'End-to-end testing often gets overlooked, but it\'s crucial for catching real user issues. Learn how to implement effective E2E tests that give you confidence in your deployments.',
      date: 'December 15, 2024',
      tags: ['testing', 'e2e', 'playwright', 'quality-assurance'],
      link: '/blog/why-e2e-testing-matters'
    },
    {
      title: 'Component-Driven Development: A Better Way to Build UIs',
      description: 'Learn how component-driven development can transform your workflow. Build reusable, testable components that scale across your entire application and design system.',
      date: 'December 10, 2024',
      tags: ['react', 'components', 'design-systems', 'frontend'],
      link: '/blog/component-driven-development'
    },
    {
      title: 'Debugging Like a Pro: Tools and Techniques',
      description: 'Master the art of debugging with advanced Chrome DevTools techniques, console tricks, and debugging strategies that will save you hours of frustration.',
      date: 'December 5, 2024',
      tags: ['debugging', 'devtools', 'javascript', 'productivity'],
      link: '/blog/debugging-like-a-pro'
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
        {recentPosts.length > 0 ? (
          recentPosts.map((post, index) => (
            <ContentCard
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              link={post.link}
            />
          ))
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '4rem 2rem',
            color: 'var(--text-secondary, #64748b)',
            gridColumn: '1 / -1'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Coming Soon</h3>
            <p>Blog posts will be available soon. Stay tuned!</p>
          </div>
        )}
      </ContentSection>
    </>
  );
};

export default Home;