const connector = require('../config/database');
const Sequelize = require('sequelize');

class Periodo extends Sequelize.Model {}

Periodo.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dataInicio: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    dataFim: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: connector,
    modelName: 'periodos',
  }
);

module.exports = Periodo;
