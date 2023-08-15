const config = require('../../../config');

let store;
if ( config.remoteDB === true ) {
  store = require('../../../store/remote.postgres');
} else {
  store = require('../../../store/postgres');
}

const ctrl = require('./controller')

module.exports = ctrl(store);
