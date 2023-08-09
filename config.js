require('dotenv').config()

module.exports = {
    api: {
      port: process.env.API_PORT || 3000,
      secret: process.env.API_SECRET || 'api-secret'
    }
}
