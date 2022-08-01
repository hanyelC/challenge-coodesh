const { Pool } = require('pg')
const { PG } = require('./vars')

const pool = new Pool({
  host: PG.host,
  port: PG.port,
  user: PG.user,
  password: PG.password,
  database: PG.db
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = { pool }
