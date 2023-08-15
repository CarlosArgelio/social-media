const { models } = require('../../../libs/sequelize');

const TABLE = models.Posts

module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
      store = require('../../../store/dummy');
  }

  function list() {
    return store.list(TABLE);
  };

  return {
    list
  };
}
