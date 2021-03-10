const Renda = require('../models/renda');
const BaseController = require('./baseController');

class RendaController extends BaseController {
  constructor() {
    super(Renda);
  }
}

module.exports = new RendaController();
