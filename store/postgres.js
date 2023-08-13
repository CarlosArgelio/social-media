const sequelize = require('../libs/sequelize')

const config = require('../config');

async function handleCon() {
    const rta = await sequelize.query('SELECT 1 + 1 AS result;');
    return rta;
}

handleCon().then(console.log).catch(console.log);
