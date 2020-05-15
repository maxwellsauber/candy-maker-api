const express = require('express')
const {
  getAllManufacturersWithProducts,
  getManufacturersWithProductsByName
} = require('./controllers/manufacturers.js')

const {
  getAllProductsWithManufacturers,
  getProductsWithManufacturersByName
} = require('./controllers/products.js')


const app = express()

app.get('/manufacturers', getAllManufacturersWithProducts)

app.get('/manufacturers/:name', getManufacturersWithProductsByName)

app.get('/products', getAllProductsWithManufacturers)

app.get('/products/:name', getProductsWithManufacturersByName)


app.listen(9999, () => {
  console.log('Listening on port 9999...') // eslint-disable-line no-console
})
