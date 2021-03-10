const Despesa = require('../models/despesa');
const BaseController = require('./baseController');

class DespesaController extends BaseController {
  constructor() {
    super(Despesa);
  }
}

module.exports = new DespesaController();
