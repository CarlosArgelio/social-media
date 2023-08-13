const { Model, DataTypes, Sequelize } = require('sequelize');

const AUTH_TABLE = 'auth';

const AuthSchema = {
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
  password: {
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

class Auth extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AUTH_TABLE,
      modelName: 'Auth',
      timestamps: true
    }
  }
}

module.exports = { AUTH_TABLE, AuthSchema, Auth};
