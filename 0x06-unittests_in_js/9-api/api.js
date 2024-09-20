const express = require('express');

const app = express();
const PORT = 7865;

// Existing root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New cart endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// 404 handler for invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
