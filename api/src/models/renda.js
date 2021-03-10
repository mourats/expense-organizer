const connector = require('../config/database');
const Sequelize = require('sequelize');
const Usuario = require('./usuario');

class Renda extends Sequelize.Model {}

Renda.init(
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
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: false,
    },
    periodo: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize: connector,
    modelName: 'renda',
  }
);

Usuario.hasMany(Renda, {
  foreignKey: {
    allowNull: false,
  },
});
Renda.belongsTo(Usuario);

module.exports = Renda;
