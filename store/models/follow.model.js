const { Model, DataTypes, Sequelize } = require('sequelize');

const FOLLOW_TABLE = 'users_follow';

const FollowSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUID
  },
  userFrom: {
    allowNull: false,
    type: DataTypes.UUID,
    length: 32,
    field: 'user_from',
    unique: {
      message: 'The user is follow this user',
      field: ['user_from', 'user_to']
    }
  },
  userTo: {
    allowNull: false,
    type: DataTypes.UUID,
    length: 32,
    field: 'user_to',
    unique: {
      message: 'The user is already being followed by this user',
      field: ['user_to', 'user_from']
    }
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

class Follow extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FOLLOW_TABLE,
      modelName: 'Follow',
      timestamps: true
    }
  }
}

module.exports = { FOLLOW_TABLE, FollowSchema, Follow};
