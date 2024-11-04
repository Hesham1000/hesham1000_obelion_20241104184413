javascript
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

module.exports = sequelize;
