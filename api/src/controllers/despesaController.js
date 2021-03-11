const Despesa = require('../models/despesa');
const BaseController = require('./baseController');
const Usuario = require('../models/usuario');
const TipoPagamento = require('../models/tipoPagamento');

class DespesaController extends BaseController {
  constructor() {
    super(Despesa);
  }

  async all(req, res) {
    try {
      const result = await this.Model.findAll({
        include: [Usuario, TipoPagamento],
      });
      res.send(result);
    } catch (error) {
      treatError(error, res);
    }
  }
}

module.exports = new DespesaController();
