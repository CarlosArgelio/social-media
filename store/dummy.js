const db = {
  'users': [
    { id: "fb0fcad9-6795-4233-b4ee-a32b3adcae1a", name: "Carlos" },
  ],
};

async function list(table) {
    return db[table]
}

async function get(table, id) {
    let col = await list(table);
    return col.find(item => item.id === id) || null
}

async function upsert(table, data) {
    // eslint-disable-next-line no-undef
    db[table].push(data);
}

// eslint-disable-next-line no-unused-vars
async function remove(table, id) {
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove

}
