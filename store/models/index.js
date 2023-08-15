const { User, UserSchema } = require('./user.model');
const { Auth, AuthSchema } = require('./auth.model');
const { Follow, FollowSchema } = require('./follow.model');
const { Posts, PostSchema } = require('./post.model');


function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Auth.init(AuthSchema, Auth.config(sequelize));
  Follow.init(FollowSchema, Follow.config(sequelize));
  Posts.init(PostSchema, Posts.config(sequelize));
}

module.exports = setUpModels;
