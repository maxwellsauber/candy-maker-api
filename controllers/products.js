const models = require('../models')

const getAllProductsWithManufacturers = async (request, response) => {
  try {
    const products = await models.Products.findAll({
      include: [{ model: models.Manufacturers }]
    })

    return products
      ? response.send(products)
      : response.sendStatus(404)
  }
  catch (error) {
    return response.status(500).send('500 errors!')
  }
}

const getProductsWithManufacturersByName = async (request, response) => {
  try {
    const { name } = request.params

    const matchingProducts = await models.Products
      .findOne({
        attributes: ['id', 'name', 'yearIntroduced'],
        where: {
          name: { [models.Op.like]: `%${name}%` },
        },
        include: [{
          model: models.Manufacturers,
          attributes: ['id', 'name', 'country']
        }]
      })

    return matchingProducts
      ? response.send(matchingProducts)
      : response.status(404)
        .send('server error 500')
  }
  catch (error) {
    return response.status(500).send('500 errors!')
  }
}

module.exports = { getAllProductsWithManufacturers, getProductsWithManufacturersByName }
