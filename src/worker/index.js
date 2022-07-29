const puppeteer = require('puppeteer')

const fetchProducts = async () => {
  const products = []
  const baseURL = 'https://world.openfoodfacts.org/'

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(baseURL)

  const urls = await page.evaluate(() => {
    const productsNodeList = document.querySelectorAll('#products_match_all li a')

    const productsUrls = Array.from(productsNodeList).map(a => a.href.match(/^https:\/\/world\.openfoodfacts\.org\/product\/\d+/)[0])

    return productsUrls
  })

  for (let url of urls) {

    console.log(url)
    await page.goto(url)
    const product = await page.evaluate(() => {
      const barcode = (document.querySelector('#barcode_paragraph') && document.querySelector('#barcode_paragraph').innerText.split(': ')[1]) || ''
      const code = Number(barcode.split(' ')[0])
      const product_name = (document.querySelector('h1') && document.querySelector('h1').innerText) || ''
      const quantity = (document.querySelector('#field_quantity_value') && document.querySelector('#field_quantity_value').innerText) || ''
      const categories = (document.querySelector('#field_categories_value') && document.querySelector('#field_categories_value').innerText) || ''
      const packaging = (document.querySelector('#field_packaging_value') && document.querySelector('#field_packaging_value').innerText) || ''
      const brands = (document.querySelector('#field_brands_value') && document.querySelector('#field_brands_value').innerText) || ''


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

    products.push(product)
  }



  await browser.close()


  return products
}

  ; (async () => {
    const prod = await fetchProducts()
    console.log(prod)
  })()