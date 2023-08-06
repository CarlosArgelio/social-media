const nanoid = require('nanoid');

const TABLE = 'users';

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function upsert(body) {
        const user = {
            name: body.name,
        };

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid();
        }

        return store.upsert(TABLE, user);
    }

    return {
        list: () => store.list(TABLE),
        get: (id) => store.get(TABLE, id),
        upsert,
    };
}
