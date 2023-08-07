const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const users = require('./components/users/network');

// middlewares
const { logErrors, errorHandler } = require('../middlewares/error.handler');

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

const app = express();

app.use(bodyParser.json());

// ROUTERS
app.use('/api/users', users)

// middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logErrors);
app.use(errorHandler);


app.listen(config.api.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.api.port}`);
});
