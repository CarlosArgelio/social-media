const jwt = require('jsonwebtoken');
const config = require('../config');

function sign(data) {
  return jwt.sign(data, config.api.secret, {
  })
}

module.exports = {
  sign,
};
