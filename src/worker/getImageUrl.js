const { api } = require('../config/api')

const getImageUrl = async (product) => {
  let image_url
  try {
    const res = await api.get(`/${product.code}`)

    image_url = res.data.product.image_url

  } catch (error) {
    console.error(error)
  }

  product.image_url = image_url || null

  return product
}

const productsWithImageUrl = async (productsList) => {
  const promises = []

  for (let product of productsList) {
    promises.push(getImageUrl(product))
  }

  const products = await Promise.all(promises)

  return products
}

module.exports = { productsWithImageUrl }
