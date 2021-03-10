module.exports = (app) => {
  const tipoPagamento = require('../controllers/tipoPagamentoController');

  // Create a new tipoPagamento
  app.post('/tipo-pagamento', tipoPagamento.create);

  // Retrieve all tipoPagamento
  app.get('/tipo-pagamento', tipoPagamento.all);

  // Retrieve a single tipoPagamento with id
  app.get('/tipo-pagamento/:id', tipoPagamento.get);

  // Update a tipoPagamento with id
  app.put('/tipo-pagamento', tipoPagamento.update);

  // Delete a tipoPagamento with id
  app.delete('/tipo-pagamento/:id', tipoPagamento.delete);
};
