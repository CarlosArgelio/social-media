const { UserSchema, USER_TABLE } = require('../models/user.model');
const { AuthSchema, AUTH_TABLE } = require('../models/auth.model');
const { FollowSchema, FOLLOW_TABLE } = require('../models/follow.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(AUTH_TABLE, AuthSchema);
    await queryInterface.createTable(FOLLOW_TABLE, FollowSchema,
      {
        uniquekeys: {
          unique_tag: {
            customindex: true,
            fields: ["user_from", "user_to"]
          }
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(AUTH_TABLE);
    await queryInterface.dropTable(FOLLOW_TABLE);
  }
};
