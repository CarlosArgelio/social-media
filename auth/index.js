const jwt = require('jsonwebtoken');
const config = require('../config');
const boom = require('@hapi/boom');

function sign(data) {
  return jwt.sign(data, config.api.secret, {
  })
}

function verify(token) {
  return jwt.verify(token, config.api.secret);
}

const check = {
    own: function (req, owner) {
      const decoded = decodeHeader(req);
      console.log(decoded);
    },
}

function getToken(auth) {
    if (!auth) {
        throw boom.unauthorized('Token not provided');
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw boom.unauthorized('invalid token provider');
    }

    let token = auth.replace('Bearer ', '');

    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = jwt.verify(token, config.api.secret);

    req.user = decoded;

    return decoded;
}

module.exports = {
  sign,
  check
};
