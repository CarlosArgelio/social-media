const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config')
const users = require('./components/users/network')
// swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger/swagger.json')

const app = express()

app.use(bodyParser.json())

// middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// ROUTERS
app.use('/api/users', users)

app.listen(config.api.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.api.port}`);
});
