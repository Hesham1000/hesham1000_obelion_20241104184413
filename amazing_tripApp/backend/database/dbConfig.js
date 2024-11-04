javascript
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('amazing_tripApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

const BlogPost = require('../models/BlogPost');
BlogPost.init(sequelize);

sequelize.sync();

module.exports = sequelize;
