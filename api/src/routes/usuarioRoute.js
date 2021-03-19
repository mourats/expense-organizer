module.exports = (app) => {
  const usuario = require('../controllers/usuarioController.js');

  // Create a new usuario
  app.post('/usuario', usuario.create);

  // Retrieve all usuario
  app.get('/usuario', usuario.all);

  // Retrieve a single usuario with id
  app.get('/usuario/:id', usuario.get);

  // Update a usuario with id
  app.put('/usuario', usuario.update);

  // Delete a usuario with id
  app.delete('/usuario/:id', usuario.delete);
};
