const { Sequelize } = require('sequelize');
const setUpModels = require('../store/models/index');

const config = require('../config');

const USER = encodeURIComponent(config.postgres.user);
const PASSWORD = encodeURIComponent(config.postgres.password);
const URI = `${config.database.db}://${USER}:${PASSWORD}@${config.postgres.host}:${config.postgres.port}/${config.postgres.database}`;

const sequelize = new Sequelize(URI, {
    dialect: `${config.database.db}`,
    logging: false
});

setUpModels(sequelize);

if (config.env === 'development') {
    sequelize.sync();
}

module.exports = sequelize;
