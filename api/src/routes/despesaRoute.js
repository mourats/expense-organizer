module.exports = (app) => {
  const despesa = require('../controllers/despesaController');

  // Create a new despesa
  app.post('/despesa', despesa.create);

  // Retrieve all despesa
  app.get('/despesa', despesa.all);

  // Retrieve a single despesa with id
  app.get('/despesa/:id', despesa.get);

  // Update a despesa with id
  app.put('/despesa', despesa.update);

  // Delete a despesa with id
  app.delete('/despesa/:id', despesa.delete);
};
