module.exports = (app) => {
  const renda = require('../controllers/rendaController');

  // Create a new periodo
  app.post('/renda', renda.create);

  // Retrieve all renda
  app.get('/renda', renda.all);

  // Retrieve a single periodo with id
  app.get('/renda/:id', renda.get);

  // Update a periodo with id
  app.put('/renda', renda.update);

  // Delete a periodo with id
  app.delete('/renda/:id', renda.delete);
};
