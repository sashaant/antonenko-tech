import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();

  // Blog posts data (same as in Home.js and Blog.js)
  const allPosts = [
    {
      slug: 'getting-started-test-automation',
      title: 'Getting Started with Test Automation in JavaScript',
      description: 'A comprehensive guide to setting up automated testing in your JavaScript projects using Jest and Playwright.',
      date: 'January 2, 2025',
      tags: ['testing', 'automation', 'javascript', 'jest'],
      content: `
        <h2>Why Test Automation Matters</h2>
        <p>Test automation is crucial for modern software development. It helps catch bugs early, ensures code quality, and gives you confidence when making changes to your codebase.</p>
        
        <h2>Getting Started with Jest</h2>
        <p>Jest is a delightful JavaScript testing framework with a focus on simplicity. It works out of the box for most JavaScript projects and provides a great developer experience.</p>
        
        <h3>Installation</h3>
        <pre><code>npm install --save-dev jest</code></pre>
        
        <h3>Writing Your First Test</h3>
        <pre><code>// sum.test.js
const sum = (a, b) => a + b;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});</code></pre>
        
        <h2>Introduction to Playwright</h2>
        <p>Playwright enables reliable end-to-end testing for modern web apps. It can test across all browsers and provides powerful automation capabilities.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Cross-browser testing (Chrome, Firefox, Safari)</li>
          <li>Auto-wait for elements to be ready</li>
          <li>Powerful selectors and assertions</li>
          <li>Network interception and mocking</li>
        </ul>
        
        <h2>Best Practices</h2>
        <ol>
          <li>Write tests that are independent and isolated</li>
          <li>Use descriptive test names</li>
          <li>Keep tests simple and focused</li>
          <li>Run tests in CI/CD pipeline</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Starting with test automation can seem daunting, but the benefits far outweigh the initial investment. Begin with simple unit tests, then gradually add integration and E2E tests as you become more comfortable.</p>
      `
    },
    {
      slug: 'scalable-react-applications',
      title: 'Building Scalable React Applications: Lessons Learned',
      description: 'After building multiple React applications at scale, I share key architectural decisions and performance optimization techniques.',
      date: 'December 28, 2024',
      tags: ['react', 'architecture', 'performance', 'best-practices'],
      content: `
        <h2>Introduction</h2>
        <p>After years of building React applications that scale to millions of users, I've learned what works and what doesn't. Here are the key lessons that will save you months of refactoring.</p>
        
        <h2>Architecture Decisions</h2>
        
        <h3>1. Component Organization</h3>
        <p>Organize your components by feature, not by type. This makes it easier to understand the codebase and locate related files.</p>
        <pre><code>src/
  features/
    auth/
      Login.js
      Register.js
      authSlice.js
    dashboard/
      Dashboard.js
      DashboardStats.js
      dashboardSlice.js</code></pre>
        
        <h3>2. State Management</h3>
        <p>Don't over-engineer state management. Start with useState and useContext, then add Redux/Zustand only when you actually need it.</p>
        
        <h2>Performance Optimization</h2>
        
        <h3>Code Splitting</h3>
        <p>Use React.lazy() and Suspense to split your code by route:</p>
        <pre><code>const Dashboard = lazy(() => import('./Dashboard'));

<Suspense fallback={<Loading />}>
  <Dashboard />
</Suspense></code></pre>
        
        <h3>Memoization</h3>
        <p>Use React.memo, useMemo, and useCallback strategically, not everywhere:</p>
        <ul>
          <li>React.memo - for expensive components that re-render often</li>
          <li>useMemo - for expensive calculations</li>
          <li>useCallback - for functions passed to memoized children</li>
        </ul>
        
        <h2>Common Pitfalls</h2>
        <ol>
          <li>Premature optimization - measure first, optimize later</li>
          <li>Over-abstraction - don't create abstractions until you need them</li>
          <li>Prop drilling - use context or state management when needed</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>Building scalable React applications requires thoughtful architecture and measured optimization. Focus on developer experience and code maintainability first, then optimize based on real performance data.</p>
      `
    },
    {
      slug: 'modern-javascript-patterns-2025',
      title: 'Modern JavaScript Patterns You Should Know in 2025',
      description: 'Explore the latest JavaScript patterns and features that are changing how we write code.',
      date: 'December 20, 2024',
      tags: ['javascript', 'es2024', 'patterns', 'modern-js'],
      content: `
        <h2>The Evolution of JavaScript</h2>
        <p>JavaScript has evolved dramatically in recent years. Let's explore the patterns and features that are shaping modern development in 2025.</p>
        
        <h2>Optional Chaining and Nullish Coalescing</h2>
        <p>These features have become essential for handling nullable values:</p>
        <pre><code>// Optional chaining
const userName = user?.profile?.name;

// Nullish coalescing
const displayName = userName ?? 'Guest';</code></pre>
        
        <h2>Async/Await Patterns</h2>
        <p>Modern async patterns make asynchronous code cleaner and more maintainable:</p>
        <pre><code>// Parallel execution
const [users, posts] = await Promise.all([
  fetchUsers(),
  fetchPosts()
]);

// Error handling
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
}</code></pre>
        
        <h2>Destructuring and Spread</h2>
        <p>These patterns enable cleaner, more expressive code:</p>
        <pre><code>// Object destructuring with defaults
const { name = 'Unknown', age = 0 } = user;

// Array destructuring
const [first, ...rest] = numbers;

// Spread operator
const merged = { ...defaults, ...userConfig };</code></pre>
        
        <h2>Modern Module Patterns</h2>
        <p>ES modules have become the standard, enabling better code organization:</p>
        <pre><code>// Named exports
export const helper = () => {};
export const utils = {};

// Default export
export default class MyClass {}</code></pre>
        
        <h2>Functional Patterns</h2>
        <p>Functional programming patterns are increasingly popular:</p>
        <ul>
          <li>Pure functions and immutability</li>
          <li>Higher-order functions (map, filter, reduce)</li>
          <li>Function composition</li>
          <li>Currying and partial application</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Mastering these modern JavaScript patterns will make you a more effective developer. They enable cleaner, more maintainable code and are essential knowledge for 2025 and beyond.</p>
      `
    }
  ];

  // Find the post by slug
  const post = allPosts.find(p => p.slug === slug);

  // If post not found, show not found message
  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <article className="blog-post">
        <Link to="/blog" className="back-link">← Back to Blog</Link>
        
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-description">{post.description}</p>
          <div className="blog-post-meta">
            <time className="blog-post-date">{post.date}</time>
            <div className="blog-post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        </header>

        <div 
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;