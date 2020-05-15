const models = require('../models')

const getAllManufacturersWithProducts = async (request, response) => {
  try {
    const manufacturers = await models.Manufacturers.findAll({
      include: [{ model: models.Products }]
    })

    return manufacturers
      ? response.send(manufacturers)
      : response.sendStatus(404)
  }
  catch (error) {
    return response.status(500).send('500 errors!')
  }
}

const getManufacturersWithProductsByName = async (request, response) => {
  try {
    const { name } = request.params

    const matchingManufacturers = await models.Manufacturers
      .findOne({
        attributes: ['id', 'name', 'country'],
        where: {
          name: { [models.Op.like]: `%${name}%` },
        },
        include: [
          {
            model: models.Products,
            attributes: ['id', 'name', 'yearIntroduced']
          }
        ]
      })

    return matchingManufacturers
      ? response.send(matchingManufacturers)
      : response.status(404)
        .send('server error 500')
  }
  catch (error) {
    return response.status(500).send('500 errors!')
  }
}

module.exports = { getAllManufacturersWithProducts, getManufacturersWithProductsByName }
