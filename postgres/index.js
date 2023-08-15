const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const { route } = require('./network');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

// ROUTES

app.use(router)

app.listen(config.postgresService.port, () => {
  console.log('Servicio de postgress escuchando en el puerto', config.postgresService.port);
})
