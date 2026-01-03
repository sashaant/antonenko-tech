import React from 'react';
import ContentSection from '../components/ContentSection';
import ContentCard from '../components/ContentCard';

const Blog = () => {
  const allPosts = [
    {
      title: 'Getting Started with Test Automation in JavaScript',
      description: 'A comprehensive guide to setting up automated testing in your JavaScript projects using Jest and Playwright. Learn best practices, common pitfalls, and how to write maintainable tests that catch bugs before they reach production.',
      date: 'January 2, 2025',
      tags: ['testing', 'automation', 'javascript', 'jest'],
      link: '/blog/getting-started-test-automation'
    },
    {
      title: 'Building Scalable React Applications: Lessons Learned',
      description: 'After building multiple React applications at scale, I share key architectural decisions, state management strategies, and performance optimization techniques that actually work in production environments.',
      date: 'December 28, 2024',
      tags: ['react', 'architecture', 'performance', 'best-practices'],
      link: '/blog/scalable-react-applications'
    },
    {
      title: 'Modern JavaScript Patterns You Should Know in 2025',
      description: 'Explore the latest JavaScript patterns and features that are changing how we write code. From optional chaining to async patterns, discover what makes modern JavaScript so powerful and expressive.',
      date: 'December 20, 2024',
      tags: ['javascript', 'es2024', 'patterns', 'modern-js'],
      link: '/blog/modern-javascript-patterns-2025'
    },
    {
      title: 'Why E2E Testing Matters: A Practical Guide',
      description: 'End-to-end testing often gets overlooked, but it\'s crucial for catching real user issues. Learn how to implement effective E2E tests that give you confidence in your deployments and catch integration bugs early.',
      date: 'December 15, 2024',
      tags: ['testing', 'e2e', 'playwright', 'quality-assurance'],
      link: '/blog/why-e2e-testing-matters'
    },
    {
      title: 'Component-Driven Development: A Better Way to Build UIs',
      description: 'Learn how component-driven development can transform your workflow. Build reusable, testable components that scale across your entire application and design system, improving consistency and development speed.',
      date: 'December 10, 2024',
      tags: ['react', 'components', 'design-systems', 'frontend'],
      link: '/blog/component-driven-development'
    },
    {
      title: 'Debugging Like a Pro: Tools and Techniques',
      description: 'Master the art of debugging with advanced Chrome DevTools techniques, console tricks, and debugging strategies that will save you hours of frustration. Learn to find and fix bugs faster than ever.',
      date: 'December 5, 2024',
      tags: ['debugging', 'devtools', 'javascript', 'productivity'],
      link: '/blog/debugging-like-a-pro'
    },
    {
      title: 'Understanding JavaScript Closures and Scope',
      description: 'Deep dive into JavaScript closures and scope chains. Understand how closures work, why they matter, and how to use them effectively in your applications without memory leaks.',
      date: 'November 28, 2024',
      tags: ['javascript', 'closures', 'fundamentals', 'advanced'],
      link: '/blog/javascript-closures-scope'
    },
    {
      title: 'Optimizing React Performance: Real-World Tips',
      description: 'Practical performance optimization techniques for React applications. Learn when to use useMemo, useCallback, and React.memo, and discover profiling tools that help identify bottlenecks.',
      date: 'November 20, 2024',
      tags: ['react', 'performance', 'optimization', 'hooks'],
      link: '/blog/optimizing-react-performance'
    },
    {
      title: 'Test-Driven Development in Practice',
      description: 'TDD isn\'t just theory—it\'s a practical approach that improves code quality. Learn how to write tests first, refactor with confidence, and build more maintainable software.',
      date: 'November 15, 2024',
      tags: ['tdd', 'testing', 'best-practices', 'methodology'],
      link: '/blog/tdd-in-practice'
    },
    {
      title: 'Building Accessible Forms: A Complete Guide',
      description: 'Forms are critical to web applications, but they\'re often inaccessible. Learn how to build forms that work for everyone, with proper labels, error messages, and keyboard navigation.',
      date: 'November 10, 2024',
      tags: ['accessibility', 'forms', 'a11y', 'ux'],
      link: '/blog/accessible-forms-guide'
    },
    {
      title: 'Git Workflow Best Practices for Teams',
      description: 'Establish a solid Git workflow that scales with your team. Learn about branching strategies, commit conventions, code review processes, and how to handle merge conflicts effectively.',
      date: 'November 5, 2024',
      tags: ['git', 'workflow', 'collaboration', 'best-practices'],
      link: '/blog/git-workflow-best-practices'
    },
    {
      title: 'API Design: RESTful Principles That Matter',
      description: 'Design better APIs by following RESTful principles that actually matter. Learn about resource naming, HTTP methods, status codes, and versioning strategies that make APIs intuitive and maintainable.',
      date: 'October 28, 2024',
      tags: ['api', 'rest', 'backend', 'design'],
      link: '/blog/restful-api-design'
    }
  ];

  return (
    <div style={{ paddingTop: '2rem' }}>
      <ContentSection title="All Blog Posts">
        {allPosts.length > 0 ? (
          allPosts.map((post, index) => (
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
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Coming Soon</h3>
            <p style={{ fontSize: '1.125rem' }}>Blog posts will be available soon. Stay tuned for articles about JavaScript, React, Testing, and more!</p>
          </div>
        )}
      </ContentSection>
    </div>
  );
};

export default Blog;