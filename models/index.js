const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const ProductsModel = require('./products')
const ManufacturersModel = require('./manufacturers')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect
})

const Manufacturers = ManufacturersModel(connection, Sequelize)
const Products = ProductsModel(connection, Sequelize, Manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = { Products, Manufacturers, Op: Sequelize.Op, }
