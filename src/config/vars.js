const path = require('path')
const env = process.env.NODE_ENV || 'development'

if (env === 'production') {
  require('dotenv').config({ path: path.join(__dirname, `../../.env`) })
} else {
  require('dotenv').config({ path: path.join(__dirname, `../../.env.dev`) })
}

module.exports = {
  env,
  port: process.env.PORT,
  PG: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    db: process.env.POSTGRES_DB,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
  }
}
