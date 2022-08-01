const { Client } = require('pg')
const { PG } = require('./vars')

const client = new Client({
  host: PG.host,
  port: PG.port,
  user: PG.user,
  password: PG.password,
  database: PG.db
})

module.exports = { client }
