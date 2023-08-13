const { User, UserSchema } = require('./user.model');
const { Auth, AuthSchema } = require('./auth.model');

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Auth.init(AuthSchema, Auth.config(sequelize));
}

module.exports = setUpModels;
