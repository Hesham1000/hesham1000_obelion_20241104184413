const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('amazing_tripApp', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class BlogPost extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    }, {
      sequelize,
      modelName: 'BlogPost',
      tableName: 'blog_posts',
      timestamps: false
    });
  }
}

module.exports = BlogPost;