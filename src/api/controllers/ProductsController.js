const { ProductsRepository } = require('../repositories/ProductsRepository-PG')
const { APIError } = require('../utils/APIError')

class ProductsController {
  async index(req, res) {
    const { start = 1, limit = 20 } = req.query

    const productsRepository = new ProductsRepository()

    const products = await productsRepository.index(start, limit)

    if (!products) {
      throw new APIError(404, 'Product not found')
    }

    return res.status(200).json(products)
  }

  async show(req, res) {
    const { code } = req.params

    const productsRepository = new ProductsRepository()

    const product = await productsRepository.show(code)

    if (!product) {
      throw new APIError(404, 'Product not found')
    }

    return res.status(200).json(product)

  }
}

module.exports = { ProductsController }
