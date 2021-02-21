require('dotenv').config();

const Sequelize = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,

  {
    database: process.env.DB,
    host: process.env.DB_HOST,
    dialect: process.env.SEQUELIZE_DIALECT,
  }
);
