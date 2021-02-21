const Usuario = require('../models/usuario');
const BaseController = require('./baseController');

class UsuarioController extends BaseController {
  constructor() {
    super(Usuario);
  }
}

module.exports = new UsuarioController();
