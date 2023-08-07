const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

router.get('/list', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

function list(req, res, next) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => {
      next(err)
    });
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      next(err)
    });
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      next(err)
    });
}

module.exports = router
