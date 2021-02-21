const connector = require('../config/database');
const Sequelize = require('sequelize');
const TipoPagamento = require('./tipoPagamento');
const Periodo = require('./periodo');
const Usuario = require('./usuario');

class Despesas extends Sequelize.Model {}

Despesas.init(
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
  },
  {
    sequelize: connector,
    modelName: 'despesas',
  }
);

TipoPagamento.hasMany(Despesas, {
  foreignKey: {
    allowNull: false,
  },
});
Despesas.belongsTo(TipoPagamento);

Periodo.hasMany(Despesas, {
  foreignKey: {
    allowNull: false,
  },
});
Despesas.belongsTo(Periodo);

Usuario.hasMany(Despesas, {
  foreignKey: {
    allowNull: false,
  },
});
Despesas.belongsTo(Usuario);

module.exports = Despesas;
