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

// CREATE
server.post('/api/products', (req, res) => {
    const { body } = req;
    // Products.create
    const newProduct = new Products(body);

    newProduct.save()
      .then(dbRes => res.status(201).json(dbRes))
      .catch(err => res.status(400).json(err));
});

// READ (ALL)
server.get('/api/products', (req, res) => {
  Products.find()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(404).json(err));
});

// READ (ONE)
server.get('/api/products/:id', (req, res) => {
  Products.findById(req.params.id)
    .then(product => {
      if (!product) res.status(404).json({ message: 'product not found' });
      res.status(200).json(product)
    })
    .catch(err => res.status(404).json(err));
});

// UPDATE
server.patch('/api/products/:id', (req, res) => {
  Products.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedProduct => res.status(200).json(updatedProduct))
    .catch(err => res.status(404).json(err));
});

// DELETE
server.delete('/api/products/:id', (req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch(err => res.status(404).json(err));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));