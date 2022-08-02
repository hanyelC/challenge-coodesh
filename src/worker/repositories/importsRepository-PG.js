const { pool } = require('../../config/dbConnection')

class ImportsRepository {
  async getLastRow() {
    const client = await pool.connect()

    let page = null

    try {
      page = (await client.query('SELECT * FROM imports ORDER BY page_number DESC LIMIT 1')).rows[0]

    } catch (error) {
      console.error(error)
    } finally {
      client.release()
    }

    return page
  }

  async add(pageNumber) {
    const client = await pool.connect()

    try {
      await client.query('INSERT INTO imports (page_number) VALUES ($1);', [pageNumber])

    } catch (error) {
      console.error(error)
    } finally {
      client.release()
    }
  }
}

module.exports = { ImportsRepository }
