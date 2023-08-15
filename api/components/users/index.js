// const store = require('../../../store/postgres');
const store = require('../../../store/remote.postgres');

const ctrl = require('./controller')

module.exports = ctrl(store);
