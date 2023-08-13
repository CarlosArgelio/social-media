const { Sequelize } = require('sequelize');

const config = require('../config');

const USER = encodeURIComponent(config.postgres.user);
const PASSWORD = encodeURIComponent(config.postgres.password);
const URI = `${config.database.db}://${USER}:${PASSWORD}@${config.postgres.host}:${config.postgres.port}/${config.postgres.database}`;

const sequelize = new Sequelize(URI, {
    dialect: `${config.database.db}`,
    logging: true
});

module.exports = sequelize;
