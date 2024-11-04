javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('amazing_tripApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

module.exports = sequelize;
