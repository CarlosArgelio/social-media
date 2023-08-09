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

    if (!data || data.length === 0) {
      throw boom.unauthorized('username or password are incorrect');
    }

    return bcrypt.compare(password, data.password)
      .then(isEqual => {
        if (isEqual) {
          // Generate token
          return auth.sign(data)
        } else {
          throw boom.unauthorized('username or password are incorrect');
        }
      })
      .catch((err) => {
        throw err;
      });
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
