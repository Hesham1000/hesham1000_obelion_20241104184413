const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// POST /users - Create a new user
router.post('/users', userController.createUser);

// GET /users - Retrieve all users
router.get('/users', userController.getAllUsers);

// GET /users/:id - Retrieve a single user by ID
router.get('/users/:id', userController.getUserById);

// PUT /users/:id - Update a user
router.put('/users/:id', userController.updateUser);

// DELETE /users/:id - Delete a user
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
