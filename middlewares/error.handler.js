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

function boomErrorHandler (err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    const errorBody = {
      error: output.payload.error,
      message: output.payload.message,
    }
    console.log(output.payload);
    response.error(req, res, errorBody, output.statusCode);
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
};
