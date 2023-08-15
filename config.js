require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV || 'development',
    api: {
      port: process.env.API_PORT || 3000,
      secret: process.env.API_SECRET || 'api-secret'
    },
    database: {
      db: process.env.DATABASE_TYPE || 'sqalite'
    },
    postgres: {
      host: process.env.POSTGRES_HOST || '',
      user: process.env.POSTGRES_USER || '',
      password: process.env.POSTGRES_PASSWORD || '',
      database: process.env.POSTGRES_DATABASE || '',
      port: process.env.POSTGRES_PORT || ''
    },
    postgresService: {
      port: process.env.POSTGRES_SERVICE_PORT || 3001
    }
}
