require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connector = require('./config/database');

connector
  .sync({ logging: false })
  .then(() => console.info('Tables and models synchronized successfully!'))
  .catch((err) => console.error('Error synchronizing models and tables:', err));

const app = express();

// enabling CORS
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to expense-organizer-api.' });
});

require('./routes/usuarioRoute.js')(app);
require('./routes/rendaRoute.js')(app);
require('./routes/tipoPagamentoRoute.js')(app);
require('./routes/despesaRoute.js')(app);

// set port, listen for requests
app.listen(7000, () => {
  console.log('Server is running on port 7000.');
});
