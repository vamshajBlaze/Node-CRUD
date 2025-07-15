// app.js
const express = require('express');
const productRoutes = require('./routes/product.routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello, this Node API");
});

app.post('/test', (req, res) => {
  res.json({ message : req.body });
});

app.use('/api/product', productRoutes); // All routes start with /api/product

app.use((err, req, res, next) => {
  console.error('Error :', err.message);
  res.status(500).json({ message: err.message || 'Something went wrong' });
});

module.exports = app;
