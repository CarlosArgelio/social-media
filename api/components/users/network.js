const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

/**
* @swagger
* components:
*   schemas:
*     User:
*       type: object
*       properties:
*         name:
*           type: string
*           description: Name user
*       required:
*         - name
*       example:
*         name: Carlos Argelio
*/
router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', upsert);

function list(req, res) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 500, err);
    });
}

function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 500, err);
    });
}

function upsert(req, res) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      response.error(req, res, err, 500, err);
    });
}

module.exports = router
