const { createClient } = require('redis');
const config = require('../config');

const client = createClient({
    password: config.cacheService.password,
    socket: {
        host: config.cacheService.host,
        port: config.cacheService.port
    }
});

function list(table) {
  return new Promise((resolve, reject) => {
    client.get(table, (err, data) => {
      if (err) return reject(err);

      let res = data || null;
      if (data) {
        res = JSON.parse(data);
      }
      resolve(res);
    });
  })
}

function get(table, id) {
  //
}

function upsert(table, data) {
  let key = table;
  if (data && data.id) {
    key = key + '_' + data.id;
  }
  client.setEx(key, 10, JSON.stringify(data));
  return true;
}

module.exports = {
  list,
  get,
  upsert
}
