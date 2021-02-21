require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const connector = require('./config/database');

connector
  .sync({ logging: false })
  .then(() => console.info('Tables and models synchronized successfully!'))
  .catch((err) => console.error('Error synchronizing models and tables:', err));

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to expense-organizer-api.' });
});

require('./routes/usuarioRoute.js')(app);
require('./routes/periodoRoute.js')(app);
require('./routes/tipoPagamentoRoute.js')(app);
require('./routes/despesasRoute.js')(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
