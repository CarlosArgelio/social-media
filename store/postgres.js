async function list(table) {
  try {
    const res = await table.findAll();
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function get(table, id) {
  try {
    const res = await table.findByPk(id);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function insert(table, data) {
  try {
    const newUser = await table.create(data);
    return newUser;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  list,
  get,
  upsert: insert
}
