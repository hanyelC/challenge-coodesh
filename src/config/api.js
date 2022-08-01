const axios = require('axios')

const api = axios.create({
  baseURL: 'https://world.openfoodfacts.org/api/v0/product'
})

module.exports = { api }
