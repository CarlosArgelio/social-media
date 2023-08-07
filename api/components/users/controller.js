// const nanoid = require('nanoid');
const uuid = require('uuid');
const boom = require('@hapi/boom');

const TABLE = 'users';

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
      return store.list(TABLE);
    }

    async function get(id) {
      const user = await store.get(TABLE, id);
      if (!user) {
        throw boom.notFound('User not found');
      }
      return user
    }

    function upsert(body) {
        const user = {
            name: body.name,
        };

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = uuid.v4();
        }

        return store.upsert(TABLE, user);
    }

    return {
        list,
        get,
        upsert,
    };
}
