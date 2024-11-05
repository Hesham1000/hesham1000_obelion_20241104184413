const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('amazing_tripApp', 'root', 'root', {
  host: 'db',
  dialect: 'mysql',
  port: 3306
});

const BlogPost = sequelize.define('BlogPost', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  summary: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  tableName: 'blog_posts',
  timestamps: false
});

module.exports = { sequelize, BlogPost };
