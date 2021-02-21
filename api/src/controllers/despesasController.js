const Despesas = require('../models/despesas');
const BaseController = require('./baseController');

class DespesasController extends BaseController {
  constructor() {
    super(Despesas);
  }
}

module.exports = new DespesasController();
