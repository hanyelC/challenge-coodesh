const { Router } = require('express')
const { productsRoutes } = require('./products.routes')

const routes = Router()

routes.get('/', (req, res) => {
  console.log('here')
  res.status(200).json({ message: 'Fullstack Challenge 20201026' })
})

routes.use('/products', productsRoutes)

module.exports = { routes }
