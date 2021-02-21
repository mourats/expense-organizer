module.exports = (app) => {
  const periodos = require('../controllers/periodoController');

  // Create a new periodo
  app.post('/periodos', periodos.create);

  // Retrieve all periodos
  app.get('/periodos', periodos.all);

  // Retrieve a single periodo with id
  app.get('/periodos/:id', periodos.get);

  // Update a periodo with id
  app.put('/periodos/:id', periodos.update);

  // Delete a periodo with id
  app.delete('/periodos/:id', periodos.delete);
};
