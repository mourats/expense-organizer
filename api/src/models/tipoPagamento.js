const connector = require('../config/database');
const Sequelize = require('sequelize');

class TipoPagamento extends Sequelize.Model {}

TipoPagamento.init(
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
    diaVencimentoPadrao: {
      type: Sequelize.TINYINT,
      allowNull: false,
      validate: {
        customValidator(value) {
          if (value < 1 || value > 31) {
            throw new Error('nonexistent day!');
          }
        },
      },
    },
  },
  {
    sequelize: connector,
    modelName: 'tipoPagamentos',
  }
);

module.exports = TipoPagamento;
