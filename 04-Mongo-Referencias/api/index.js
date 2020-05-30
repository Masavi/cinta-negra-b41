const express = require('express');
const server = express();
const PORT = 4040;

server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Products
const Products = require('../models/Products');

server.post('/api/products', (req, res) => {
    const { body } = req;
    // Products.create
    const newProduct = new Products(body);

    newProduct.save()
      .then(dbRes => res.status(201).json(dbRes))
      .catch(err => res.status(400).json(err));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));