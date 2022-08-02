const { getProductsList } = require('./scraper')
const { productsWithImageUrl } = require('./getImageUrl')
const { getPageToScrap } = require('./getPageToScrap')
const { ProductsRepository } = require('./repositories/productsRepository-PG')
const { ImportsRepository } = require('./repositories/importsRepository-PG')

const main = async () => {
  const pageToScrap = await getPageToScrap()

  const productsList = await getProductsList(pageToScrap)

  const products = await productsWithImageUrl(productsList)

  const productsRepository = new ProductsRepository()
  await productsRepository.insertMany(products)

  const importsRepository = new ImportsRepository()
  await importsRepository.add(pageToScrap)
}

module.exports = { main }
