const { readFileSync } = require('fs')
const path = require('path')

const { pool } = require('../../config/dbConnection')

const migrate = async () => {
  const client = await pool.connect()

  const dataSql = readFileSync(path.resolve(__dirname, 'migrations', 'createProducts.sql')).toString()
  const queries = dataSql.split('--###')
  queries.shift()

  try {
    for (const query of queries) {
      await client.query(query)
    }

  } catch (error) {
    console.log(error.stack)
  } finally {
    client.release()
    console.log('Migration finished')
  }
}

migrate()
  .catch(error => {
    console.error(error)
  })
