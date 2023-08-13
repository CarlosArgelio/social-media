const config = require('../config');

const USER = encodeURIComponent(config.postgres.user);
const PASSWORD = encodeURIComponent(config.postgres.password);
const URI = `${config.database.db}://${USER}:${PASSWORD}@${config.postgres.host}:${config.postgres.port}/${config.postgres.database}`;

module.exports = {
  development: {
    url: URI,
    dialect: `${config.database.db}`,
  },
  staging: {
    url: URI,
    dialect: `${config.database.db}`,
  },
  production: {
    url: URI,
    dialect: `${config.database.db}`,
  }
};
