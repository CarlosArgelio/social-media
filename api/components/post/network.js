const express = require('express');

// const secure = require('./secure')
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();


router.get('/', list);

// functions

function list(req, res, next) {
  Controller.list()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(next);
}

module.exports = router;
