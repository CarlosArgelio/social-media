require('dotenv').config()
const path = require('path')

module.exports = {
    api: {
      port: process.env.API_PORT || 3000
    },
    swagger: {
      swaggerOptions: {
        definition: {
          openapi: '3.0.0',
          info: {
            title: 'API - Social Media example',
            version: '1.0.0',
          },
          servers: [
            {
              url: process.env.URL_DOCS || 'http://localhost:3000',

            }
          ]
      },
      apis: [
        `${path.join(__dirname, './api/components/users/network.js')}`
      ]
    }
  }
}
