const db = {
  'users': [
    { id: "fb0fcad9-6795-4233-b4ee-a32b3adcae1a", name: "Carlos" },
  ],
};

async function list(table) {
    return db[table] || [];
}

async function get(table, id) {
    let col = await list(table);
    return col.find(item => item.id === id) || null
}

async function upsert(table, data) {
  console.log(data)
    if (!db[table]) {
      db[table] = [];
    }
    db[table].push(data);
}

// eslint-disable-next-line no-unused-vars
async function remove(table, id) {
    return true
}

async function query(table, q) {
  let col = await list(table);
  let keys = Object.keys(q);
  let key = keys[0];
  return col.filter(item => item[key] === q[key])[0] || null
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}
