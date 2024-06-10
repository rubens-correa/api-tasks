const express = require('express');
const bodyParser = require('body-parser');
const listRoutes = require('./routes/listRoutes');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

//Use Cors
app.use(cors());

// Routes
app.use('/api', listRoutes);

// Root route for testing
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Servidor está funcionando na porta ${PORT}`);
});
