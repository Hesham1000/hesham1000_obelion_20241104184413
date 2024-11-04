import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BlogPost.css';

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://amazing_tripApp-backend.cloud-stacks.com/api/blogPosts');
        setPosts(response.data);
      } catch (err) {
        setError('An error occurred while fetching blog posts.');
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="blog-posts-container">
      <header className="blog-header">
        <h1>Browse travel blog posts</h1>
      </header>
      <nav className="navigation-tabs">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      {error && <p className="error-message">{error}</p>}
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.id} className="blog-item">
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-excerpt">{post.summary}</p>
            <a href={`/blog/${post.id}`} className="read-more-button">
              Read More
            </a>
          </li>
        ))}
      </ul>
      <footer className="blog-footer">
        <a href="/terms">Terms of Service</a>
        <a href="/contact">Contact</a>
      </footer>
    </div>
  );
};

export default BlogPost;
