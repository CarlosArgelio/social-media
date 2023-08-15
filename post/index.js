const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const post = require('./components/post/network');

const { logErrors, boomErrorHandler, errorHandler } = require('../middlewares/error.handler');

const app = express();

app.use(bodyParser.json());

// ROUTERS
app.use('/api/posts', post)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(config.post.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.post.port}`);
});
