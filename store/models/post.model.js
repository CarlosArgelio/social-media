const { Model, DataTypes, Sequelize } = require('sequelize');

const POST_TABLE = 'posts';

const PostSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  post: {
    allowNull: false,
    type: DataTypes.TEXT,
    length: 32
  },
  userId: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: 'user_id',
    length: 32
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}

class Posts extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: POST_TABLE,
      modelName: 'Posts',
      timestamps: true
    }
  }
}

module.exports = { POST_TABLE, PostSchema, Posts};
