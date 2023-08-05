const express = require('express');

const response = require('../../../network/response')

const router = express.Router();

router.get('/', (req, res) => {
  try {
    response.success(req, res, 'Hello World!', 200);
  } catch (error) {
    //
  }
})

module.exports = router
