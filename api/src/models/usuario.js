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
    firstName: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: connector,
    modelName: 'usuarios',
  }
);

module.exports = Usuario;
