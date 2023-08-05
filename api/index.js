const express = require('express')

const config = require('../config')
const users = require('./components/users/network')

const app = express()

// ROUTERS
app.use('/api/users', users)

app.listen(config.api.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${config.api.port}`);
});