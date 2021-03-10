const connector = require('../config/database');
const Sequelize = require('sequelize');
const TipoPagamento = require('./tipoPagamento');
const Usuario = require('./usuario');

class Despesa extends Sequelize.Model {}

Despesa.init(
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
    parcelas: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
    periodo: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize: connector,
    modelName: 'despesa',
  }
);

TipoPagamento.hasMany(Despesa, {
  foreignKey: {
    allowNull: false,
  },
});
Despesa.belongsTo(TipoPagamento);

Usuario.hasMany(Despesa, {
  foreignKey: {
    allowNull: false,
  },
});
Despesa.belongsTo(Usuario);

module.exports = Despesa;
