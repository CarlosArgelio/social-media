const response = require('../network/response');

function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err);
}

// eslint-disable-next-line no-unused-vars
function errorHandler (err, req, res, next) {
  const message = {
    message: err.message,
    stack: err.stack
  }
  response.error(req, res, message, 500);
}

module.exports = {
  logErrors,
  errorHandler
};
