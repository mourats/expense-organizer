module.exports = (app) => {
  const usuarios = require('../controllers/usuarioController.js');

  // Create a new usuario
  app.post('/usuarios', usuarios.create);

  // Retrieve all usuarios
  app.get('/usuarios', usuarios.all);

  // Retrieve a single usuario with id
  app.get('/usuarios/:id', usuarios.get);

  // Update a usuario with id
  app.put('/usuarios/:id', usuarios.update);

  // Delete a usuario with id
  app.delete('/usuarios/:id', usuarios.delete);
};
