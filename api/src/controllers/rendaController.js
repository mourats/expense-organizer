const Renda = require('../models/renda');
const BaseController = require('./baseController');
const Usuario = require('../models/usuario');

class RendaController extends BaseController {
  constructor() {
    super(Renda);
  }

  async all(req, res) {
    try {
      const result = await this.Model.findAll({
        include: Usuario,
      });
      res.send(result);
    } catch (error) {
      treatError(error, res);
    }
  }
}

module.exports = new RendaController();
