const express = require('express');

const response = require('../../../network/response');
const Controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
  try {
    const list = Controller.list();
    response.success(req, res, list, 200);
  } catch (error) {
    response.error(req, res, 'Unexpected error', 400, error);
  }
})

module.exports = router
