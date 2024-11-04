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

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('amazing_tripApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

module.exports = sequelize;