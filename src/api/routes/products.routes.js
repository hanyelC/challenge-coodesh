const { Router } = require('express')
const { ProductsController } = require('../controllers/ProductsController')

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get('/', productsController.index)
productsRoutes.get('/:code', productsController.show)

module.exports = { productsRoutes }
