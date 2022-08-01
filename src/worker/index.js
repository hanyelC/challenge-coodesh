const { getProductsList } = require('./scraper')
const { productsWithImageUrl } = require('./getImageUrl')
const { ProductsRepository } = require('./repositories/productsRepository-PG')

const main = async () => {
  const productsList = await getProductsList()

  const products = await productsWithImageUrl(productsList)

  const productsRepository = new ProductsRepository()
  await productsRepository.insertMany(products)

}

module.exports = { main }
