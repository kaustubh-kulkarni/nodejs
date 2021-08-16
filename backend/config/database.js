//DB connection using sequelizer
const { Sequelize } = require('sequelize');

module.exports = new Sequelize('mydb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });