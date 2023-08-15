const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const users = require('./components/users/network');
const auth = require('./components/auth/network');
const post = require('./components/post/network');


// middlewares
const { logErrors, boomErrorHandler, errorHandler } = require('../middlewares/error.handler');
// const errors = require('../network/errors')

// swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');

const app = express();

app.use(bodyParser.json());

// ROUTERS
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/posts', post)


// middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.use(errors)


app.listen(config.api.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.api.port}`);
});
