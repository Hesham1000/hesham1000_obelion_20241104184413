const express = require('express');
const router = express.Router();
const {
  getAllBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
} = require('../controllers/blogController');

const { sequelize, BlogPost } = require('../database/dbConnection');

// Route to get all blog posts
router.get('/blogPosts', getAllBlogPosts);

// Route to get a single blog post by ID
router.get('/blogPosts/:id', getBlogPostById);

// Route to create a new blog post
router.post('/blogPosts', createBlogPost);

// Route to update an existing blog post
router.put('/blogPosts/:id', updateBlogPost);

// Route to delete a blog post
router.delete('/blogPosts/:id', deleteBlogPost);

module.exports = router;