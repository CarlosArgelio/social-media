const { formatDate } = require('../utils/datetimes')

function formatResponse(req, res, message, status, statusError, details) {
  let statusCode = status;
  let statusMessage = message;

  if (details) {
    console.log(details);
  }

  res.status(status).send({
      Error: statusError,
      ResponseMetadata: {
        HTTPHeaders: {
          'Content-Type': formatDate()
        },
        HTTPStatusCode: statusCode,
      },
      Body: statusMessage
  });
}



exports.success = function (req, res, message, status) {
  message = message || '';
  status = status || 200;
  formatResponse(req, res, message, status, false)
}

exports.error = function (req, res, message, status, details) {
  message = message || 'Internal server error';
  status = status || 500;
  details = details || '';
  formatResponse(req, res, message, status, false, details)
}
