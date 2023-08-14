const { FollowSchema, FOLLOW_TABLE } = require('../models/follow.model');
const { Model, DataTypes, Sequelize } = require('sequelize');


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(FOLLOW_TABLE, 'id', FollowSchema.id);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(FOLLOW_TABLE);
  }
};
