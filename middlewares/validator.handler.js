const boom = require('@hapi/boom');

// eslint-disable-next-line no-unused-vars
function validatorHandler (schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();

  }
}

module.exports = validatorHandler
