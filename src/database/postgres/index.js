const { readFileSync } = require('fs')
const path = require('path')

const { client } = require('../../config/dbConnection')

const migrate = async () => {
  const dataSql = readFileSync(path.resolve(__dirname, 'migrations', 'createProducts.sql')).toString()
  const queries = dataSql.split('--###')
  queries.shift()

  console.log(queries.length, queries[0])

  try {
    await client.connect()

    for (const query of queries) {
      await client.query(query)
    }

    await client.end()
  } catch (error) {
    await client.end()

    console.log(error.stack)
  }
}

module.exports = { migrate }
