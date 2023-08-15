require('dotenv').config()

module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    env: process.env.NODE_ENV || 'development',
    api: {
      port: process.env.API_PORT || 3000,
      secret: process.env.API_SECRET || 'api-secret'
    },
    post: {
      port: process.env.POST_SERVICE_PORT || 3002,
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
      host: process.env.POSTGRES_SERVICE_HOST || 'localhost',
      port: process.env.POSTGRES_SERVICE_PORT || 3001
    },
    cacheService: {
      host: process.env.CACHE_SERVICE_HOST || 'localhost',
      port: process.env.CACHE_SERVICE_PORT || 3003,
      password: process.env.CACHE_SERVICE_PASSWORD || '',
      redisHost: process.env.REDIS_HOST || 'localhost',
      redisPort: process.env.REDIS_PORT || 6379
    }
}
