const express = require('express');

const response = require('../network/response');
const Store = require('../store/redis');

const router = express.Router();

const { models } = require('../libs/sequelize');

const TABLE_USERS = models.User;

router.get('/:table', list);
router.get('/:table/:id', get);
router.put('/:table', update);

async function list(req, res, next) {
  const data =  await Store.list(req.params.table)
  response.success(req, res, data, 200);
}
async function get(req, res, next) {
  const data =  await Store.get(TABLE_USERS, req.params.id)
  response.success(req, res, data, 200);
}
async function update(req, res, next) {
  const data =  await Store.upsert(TABLE_USERS, req.params.id)
  response.success(req, res, data, 200);
}


module.exports = router;
