const sequelize = require('../libs/sequelize')

const config = require('../config');

async function list(table) {
  const query = `SELECT * FROM ${table};`
  try {
    const [data] = await sequelize.query(query);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}


module.exports = {
  list
}
