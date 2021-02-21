module.exports = (app) => {
  const tipoPagamentos = require('../controllers/tipoPagamentoController');

  // Create a new tipoPagamento
  app.post('/tipoPagamentos', tipoPagamentos.create);

  // Retrieve all tipoPagamentos
  app.get('/tipoPagamentos', tipoPagamentos.all);

  // Retrieve a single tipoPagamento with id
  app.get('/tipoPagamentos/:id', tipoPagamentos.get);

  // Update a tipoPagamento with id
  app.put('/tipoPagamentos/:id', tipoPagamentos.update);

  // Delete a tipoPagamento with id
  app.delete('/tipoPagamentos/:id', tipoPagamentos.delete);
};
