const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

// const validatorHandler = require('../../../middlewares/validator.handler');
// eslint-disable-next-line no-unused-vars

const router = express.Router();

router.post('/login', function(req, res, next) {
  Controller.login(req.body.username, req.body.password)
    .then(token => {
      response.success(req, res, token, 200);
    })
    .catch((err) => {
      response.success(req, res, 'Invalid credentials', 500);
    })
});

module.exports = router;
