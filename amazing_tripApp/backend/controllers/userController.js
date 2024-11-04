const User = require('../models/User');
const express = require('express');
const router = express.Router();

// Create a new user
const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'Email already in use' });
    } else {
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  }
};

// Retrieve all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

// Retrieve a single user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.update({ email, password });
      res.status(200).json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('amazing_tripApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

module.exports = sequelize;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('amazing_tripApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

const User = require('../models/User');

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

User.init(sequelize);

module.exports = sequelize;sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Insert a new user
INSERT INTO users (email, password) VALUES (?, ?);

-- Retrieve all users
SELECT * FROM users;

-- Retrieve a single user by ID
SELECT * FROM users WHERE id = ?;

-- Update a user
UPDATE users SET email = ?, password = ? WHERE id = ?;

-- Delete a user
DELETE FROM users WHERE id = ?;