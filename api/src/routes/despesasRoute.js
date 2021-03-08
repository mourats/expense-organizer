module.exports = (app) => {
  const despesas = require('../controllers/despesasController');

  // Create a new despesas
  app.post('/despesas', despesas.create);

  // Retrieve all despesas
  app.get('/despesas', despesas.all);

  // Retrieve a single despesas with id
  app.get('/despesas/:id', despesas.get);

  // Update a despesas with id
  app.put('/despesas', despesas.update);

  // Delete a despesas with id
  app.delete('/despesas/:id', despesas.delete);
};
