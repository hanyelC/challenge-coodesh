const puppeteer = require('puppeteer')
const { getPageToScrap } = require('./getPageToScrap')

const getProductData = async (browser, url) => {
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0)

  await page.goto(url)

  const product = await page.evaluate(() => {
    const barcodeElement = document.querySelector('#barcode_paragraph')
    const barcode = (barcodeElement && barcodeElement.innerText.split(': ')[1]) || ''

    const code = Number(barcode.split(' ')[0])

    const productNameElement = document.querySelector('h1')
    const product_name = (productNameElement && productNameElement.innerText) || ''

    const quantityElement = document.querySelector('#field_quantity_value')
    const quantity = (quantityElement && quantityElement.innerText) || ''

    const categoriesElement = document.querySelector('#field_categories_value')
    const categories = (categoriesElement && categoriesElement.innerText) || ''

    const packagingElement = document.querySelector('#field_packaging_value')
    const packaging = (packagingElement && packagingElement.innerText) || ''

    const brandsElement = document.querySelector('#field_brands_value')
    const brands = (brandsElement && brandsElement.innerText) || ''

    return {
      code,
      barcode,
      status: 'imported',
      product_name,
      quantity,
      categories,
      packaging,
      brands
    }
  })

  product.url = url

  return product
}

const getProductsList = async (pageToScrap) => {

  const baseURL = 'https://world.openfoodfacts.org/' + pageToScrap

  const browser = await puppeteer.launch()

  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(0)

  await page.goto(baseURL)

  const urls = await page.evaluate(() => {
    const productsNodeList = document.querySelectorAll('#products_match_all li a')

    const productsUrls = Array.from(productsNodeList).map(a => a.href.match(/^https:\/\/world\.openfoodfacts\.org\/product\/\d+/)[0])

    return productsUrls
  })

  const promises = []

  for (let i = 0; i < 100 && i < urls.length; i++) {
    const url = urls[i]
    promises.push(getProductData(browser, url))
  }

  const products = await Promise.all(promises)

  await browser.close()

  return products
}

module.exports = { getProductsList }
