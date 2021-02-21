const TipoPagamento = require('../models/tipoPagamento');
const BaseController = require('./baseController');

class TipoPagamentoController extends BaseController {
  constructor() {
    super(TipoPagamento);
  }
}

module.exports = new TipoPagamentoController();
