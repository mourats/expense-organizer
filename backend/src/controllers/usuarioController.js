const Usuario = require('../models/usuario');
const { validContent, validResult, treatError } = require('../util/util');

class UsuarioController {
  async create(req, res) {
    validContent(req);

    try {
      const result = await Usuario.create(req.body);
      res.status(201).send(result);
    } catch (error) {
      treatError(error, res);
    }
  }

  async all(req, res) {
    try {
      const result = await Usuario.findAll();
      res.send(result);
    } catch (error) {
      treatError(error, res);
    }
  }

  async get(req, res) {
    validContent(req);
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      validResult(usuario, res);
      res.send(usuario);
    } catch (error) {
      treatError(error, res);
    }
  }

  async update(req, res) {
    console.log(req.params);

    try {
      const usuario = await Usuario.update(req.params.id, {
        where: { id: req.params.id },
        returning: true,
      });
      console.log(usuario);
      validResult(usuario, res);
      res.send(usuario);
    } catch (error) {
      treatError(error, res);
    }
  }

  async delete(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      validResult(usuario, res);
      await usuario.destroy();
      res.status(200).send();
    } catch (error) {
      treatError(error, res);
    }
  }
}

module.exports = new UsuarioController();
