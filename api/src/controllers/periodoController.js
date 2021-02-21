const Periodo = require('../models/periodo');
const BaseController = require('./baseController');

class PeriodoController extends BaseController {
  constructor() {
    super(Periodo);
  }
}

module.exports = new PeriodoController();
