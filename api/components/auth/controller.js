const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const auth = require('../../../auth');
const TABLE = 'auth';

module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
      store = require('../../../store/dummy');
  }

  async function login(username, password) {
    const data = await store.query(TABLE, { username: username });
    // validate username exists
    if (!data || data.length === 0) {
      throw boom.unauthorized();
    }
    if (data.password === password) {
      // Generate token
      return auth.sign(data)
    }
    else {
      throw boom.forbidden();
    }
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLE, authData);
  }

  return {
    upsert,
    login
  };
};
