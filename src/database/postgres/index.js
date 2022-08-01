const { readFileSync } = require('fs')
const path = require('path')

const { db } = require('../../config/dbConnection')

const migrate = async () => {
  const dataSql = readFileSync(path.resolve(__dirname, 'migrations', 'createProducts.sql')).toString()
  const queries = dataSql.split('--###')
  queries.shift()

  try {
    await db.connect()

    for (const query of queries) {
      await db.query(query)
    }

    await db.end()
  } catch (error) {
    await db.end()

    console.log(error.stack)
  }
}

module.exports = { migrate }
