module.exports = (app) => {
  const tipoPagamentos = require('../controllers/tipoPagamentoController');

  // Create a new tipoPagamento
  app.post('/tipo-pagamentos', tipoPagamentos.create);

  // Retrieve all tipoPagamentos
  app.get('/tipo-pagamentos', tipoPagamentos.all);

  // Retrieve a single tipoPagamento with id
  app.get('/tipo-pagamentos/:id', tipoPagamentos.get);

  // Update a tipoPagamento with id
  app.put('/tipo-pagamentos/:id', tipoPagamentos.update);

  // Delete a tipoPagamento with id
  app.delete('/tipo-pagamentos/:id', tipoPagamentos.delete);
};
