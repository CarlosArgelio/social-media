const { models } = require('../libs/sequelize')

async function list(table) {
  if (table === 'users') {
    table = models.User
  }
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
    const inserData = await table.create(data);
    return inserData;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function update(changes, data) {
  try {
    const resp = await data.update(changes);
    return resp;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function upsert(table, data) {
  const getData = await get(table, data.id)
  if (!getData) {
    return insert(table, data)
  } else {
    console.log('edito')
    return update(data, getData)
  }
}

async function query(table, query) {
  try {
    const res = await table.findAll({
      where: query
    });
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function upsertV2(table, data) {
  return insert(table, data)
}

module.exports = {
  list,
  get,
  upsert,
  query,
  upsertV2
}
