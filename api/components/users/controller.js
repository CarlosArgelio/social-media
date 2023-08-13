// const nanoid = require('nanoid');
const uuid = require('uuid');
const boom = require('@hapi/boom');
const auth = require('../auth');
const { models } = require('../../../libs/sequelize');

const TABLE = models.User;

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
      console.log('Se ejecuto la lista con esta conexcion ==>', injectedStore)
      return store.list(TABLE);
    }

    async function get(id) {
      const user = await store.get(TABLE, id);
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
        return store.upsert(TABLE, user);
    }

    return {
        list,
        get,
        upsert,
    };
}
