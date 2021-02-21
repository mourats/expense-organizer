const connector = require('../config/database');
const Sequelize = require('sequelize');

class Usuario extends Sequelize.Model {}

Usuario.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    sobrenome: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(60),
      allowNull: true,
    },
  },
  {
    sequelize: connector,
    modelName: 'usuarios',
  }
);

module.exports = Usuario;
