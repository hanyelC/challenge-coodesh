const { pool } = require('../../config/dbConnection')

const insertQuery = `INSERT INTO products ( code, barcode, status, product_name, quantity, categories, packaging, brands, url, image_url)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`

class ProductsRepository {
  async findByCode(code) {
    const client = await pool.connect()
    let product = null
    try {
      product = (await client.query('SELECT * FROM products WHERE code = $1', [code])).rows[0]

    } catch (error) {
      console.error(error)
    } finally {
      client.release()
    }
    return product

  }
  async insertMany(products) {
    const client = await pool.connect()

    try {

      for (const product of products) {
        const productWithCode = await this.findByCode(product.code)

        if (!productWithCode) {
          const values = [product.code, product.barcode, product.status, product.product_name, product.quantity, product.categories, product.packaging, product.brands, product.url, product.image_url]
          await client.query(insertQuery, values)
        }
      }

      client.release()
    } catch (error) {
      client.release()
      console.error(error)
    }
  }
}

module.exports = { ProductsRepository }
