const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    length: 32
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
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

class User extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: true
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User};
