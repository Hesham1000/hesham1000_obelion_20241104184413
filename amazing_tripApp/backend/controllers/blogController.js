const express = require('express');
const { Sequelize } = require('sequelize');
const { sequelize, BlogPost } = require('../database/dbConnection');

// Function to get all blog posts
const getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching blog posts.' });
  }
};

// Function to get a single blog post by ID
const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.findByPk(id);
    if (blogPost) {
      res.json(blogPost);
    } else {
      res.status(404).json({ error: 'Blog post not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the blog post.' });
  }
};

// Function to create a new blog post
const createBlogPost = async (req, res) => {
  const { title, summary } = req.body;
  try {
    const newBlogPost = await BlogPost.create({ title, summary });
    res.status(201).json(newBlogPost);
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while creating the blog post.' });
  }
};

// Function to update an existing blog post
const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, summary } = req.body;
  try {
    const blogPost = await BlogPost.findByPk(id);
    if (blogPost) {
      await blogPost.update({ title, summary });
      res.json(blogPost);
    } else {
      res.status(404).json({ error: 'Blog post not found.' });
    }
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while updating the blog post.' });
  }
};

// Function to delete a blog post
const deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    const blogPost = await BlogPost.findByPk(id);
    if (blogPost) {
      await blogPost.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Blog post not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the blog post.' });
  }
};

// Export the controller functions
module.exports = {
  getAllBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
};