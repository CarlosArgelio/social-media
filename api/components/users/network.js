const express = require('express');


const secure = require('./secure')
const response = require('../../../network/response');
const Controller = require('./index');

const validatorHandler = require('../../../middlewares/validator.handler');
// eslint-disable-next-line no-unused-vars
const { userSchema, getUserSchema } = require('./schema');

const router = express.Router();

router.get(
  '/list',
  list
);
router.post(
  '/follow/:id',
  secure('follow'),
  follow
);
router.get(
  '/:id/following',
  following
);
router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  get
);
router.post(
  '/',
  upsert
);
router.put(
  '/',
  secure('update'),
  upsert
);

function list(req, res, next) {
  Controller.list()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch(next);
}

function get(req, res, next) {
  Controller.get(req.params.id)
    .then((user) => {
      console.log(user)
      response.success(req, res, user, 200);
    })
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(next);
}

function follow(req, res, next) {

  Controller.follow(req.user.id, req.params.id)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch(next);
}

function following(req, res, next) {
	return Controller.following(req.params.id)
		.then( (data) => {
			return response.success(req, res, data, 200);
		})
		.catch(next);
}

module.exports = router
