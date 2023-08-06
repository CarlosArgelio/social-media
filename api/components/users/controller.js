const TABLE = 'users';

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    return {
        list: () => store.list(TABLE),
        get: (id) => store.get(TABLE, id),
    };
}
