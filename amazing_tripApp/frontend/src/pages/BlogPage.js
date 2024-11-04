import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css';
import axios from 'axios';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('https://amazing_tripApp-backend.cloud-stacks.com/api/blogPosts');
        setBlogPosts(response.data);
      } catch (error) {
        setError('An error occurred while fetching blog posts.');
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Browse travel blog posts</h1>
      </header>
      <nav className="blog-navigation">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main className="blog-main">
        {error && <p className="error-message">{error}</p>}
        <ul className="blog-list">
          {blogPosts.map(post => (
            <li key={post.id} className="blog-item">
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <Link to={`/blog/${post.id}`} className="read-more-button">Read More</Link>
            </li>
          ))}
        </ul>
      </main>
      <footer className="blog-footer">
        <Link to="/terms">Terms of Service</Link>
        <Link to="/contact">Contact</Link>
      </footer>
    </div>
  );
};

export default BlogPage;
