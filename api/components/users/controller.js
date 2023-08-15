// const nanoid = require('nanoid');
const uuid = require('uuid');
const boom = require('@hapi/boom');
const auth = require('../auth');
const { models } = require('../../../libs/sequelize');

const TABLE_USERS = models.User;
const TABLE_FOLLOW = models.Follow;

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
      return store.list(TABLE_USERS);
    }

    async function get(id) {
      const user = await store.get(TABLE_USERS, id);
      if (!user) {
        throw boom.notFound('User not found');
      }
      return user
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,
            password: body.password,
        };

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = uuid.v4();
        }

        if (body.password && body.username) {
            await auth.upsert({
              id: user.id,
              username: user.username,
              password: user.password,
            })
        } else {
            throw boom.badRequest('Username and password are required');
        }
        return store.upsert(TABLE_USERS, user);
    }

    async function follow(from, to) {
        return await store.upsertV2(TABLE_FOLLOW, { id: uuid.v4(), userFrom: from, userTo: to });
    }

    async function following(user) {
      const join = {}
      join[TABLE_USERS] = 'user_to'; // { user: 'user_to' }
      const query = { user_from: user };

      return await store.query(TABLE_FOLLOW, query, join);
    }

    return {
        list,
        get,
        upsert,
        follow,
        following
    };
}
