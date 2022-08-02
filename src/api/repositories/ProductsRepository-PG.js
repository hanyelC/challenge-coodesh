const { pool } = require('../../config/dbConnection')

class ProductsRepository {
  async index(start, limit) {
    const client = await pool.connect()
    let products = null

    try {
      products = (await client.query('SELECT * FROM products WHERE id >= $1 ORDER BY id ASC LIMIT $2', [start, limit])).rows
    } catch (error) {
      console.error(error)
    } finally {
      client.release()
    }

    return products
  }

  async show(code) {
    const client = await pool.connect()
    let product = null

    try {
      product = await (await client.query('SELECT * FROM products WHERE code = $1', [code])).rows[0]

    } catch (error) {
      console.error(error)
    } finally {
      client.release()
    }

    return product
  }
}

module.exports = { ProductsRepository }
