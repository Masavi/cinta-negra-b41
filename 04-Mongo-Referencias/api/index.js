const express = require('express');
const server = express();
const PORT = 4040;

server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Product
const Product = require('../models/Product');

// CREATE
server.post('/api/products', (req, res) => {
    const { body } = req;
    // Product.create
    const newProduct = new Product(body);

    newProduct.save()
      .then(dbRes => res.status(201).json(dbRes))
      .catch(err => res.status(400).json(err));
});

// READ (ALL)
server.get('/api/products', (req, res) => {
  Product.find()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(404).json(err));
});

// READ (ONE)
server.get('/api/products/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) res.status(404).json({ message: 'product not found' });
      res.status(200).json(product)
    })
    .catch(err => res.status(404).json(err));
});

// UPDATE
server.patch('/api/products/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedProduct => res.status(200).json(updatedProduct))
    .catch(err => res.status(404).json(err));
});

// DELETE
server.delete('/api/products/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch(err => res.status(404).json(err));
});

// Ticket
const Ticket = require('../models/Ticket');

// CREATE
server.post('/api/tickets', (req, res) => {
  const { body } = req;
  // Ticket.create
  const newTicket = new Ticket(body);

  newTicket.save()
    .then(dbRes => res.status(201).json(dbRes))
    .catch(err => res.status(400).json(err));
});

// READ (ALL)
server.get('/api/tickets', (req, res) => {
  Ticket.find()
    .then(tickets => res.status(200).json(tickets))
    .catch(err => res.status(404).json(err));
});

// READ (ONE)
server.get('/api/tickets/:id', (req, res) => {
  Ticket.findById(req.params.id)
    .populate('products')
    .then(product => {
      if (!product) res.status(404).json({ message: 'product not found' });
      res.status(200).json(product)
    })
    .catch(err => res.status(404).json(err));
});

// UPDATE
server.patch('/api/tickets/:id', (req, res) => {
  Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedTicket => res.status(200).json(updatedTicket))
    .catch(err => res.status(404).json(err));
});

// DELETE
server.delete('/api/tickets/:id', (req, res) => {
  Ticket.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch(err => res.status(404).json(err));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));