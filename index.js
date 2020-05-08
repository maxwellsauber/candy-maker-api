const express = require('express')
const { getAllManufacturersWithProducts, getManufacturersWithProductsById } = require('./controllers/manufacturers.js')
const { getAllProductsWithManufacturers, getProductsWithManufacturersById } = require('./controllers/products.js')


const app = express()

app.get('/manufacturers', getAllManufacturersWithProducts)

app.get('/manufacturers/:id', getManufacturersWithProductsById)

app.get('/products', getAllProductsWithManufacturers)

app.get('/products/:id', getProductsWithManufacturersById)


app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
