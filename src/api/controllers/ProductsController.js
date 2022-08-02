const { ProductsRepository } = require('../repositories/ProductsRepository-PG')
const { APIError } = require('../utils/APIError')

class ProductsController {
  async index(req, res) {
    let { start, limit } = req.query

    start = Number(start) || 1
    limit = Number(limit) || 20

    const paging = {}

    const productsRepository = new ProductsRepository()

    const products = await productsRepository.index(start, limit + 1)

    if (!products) {
      throw new APIError(404, 'Product not found')
    }

    if (products.length > limit) {
      const { id } = products.pop()

      paging.next = `${req.protocol}://${req.get('host')}/products?start=${id}&limit=${limit}`
    }

    return res.status(200).json({ products, paging })
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
