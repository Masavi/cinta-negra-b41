const express = require('express');
const router = express.Router();

// Product
const Product = require('../models/Product');

// CREATE
router.post('/api/products', (req, res) => {
    const { body } = req;
    // Product.create
    const newProduct = new Product(body);

    newProduct.save()
      .then(dbRes => res.status(201).json(dbRes))
      .catch(err => res.status(400).json(err));
});

// READ (ALL)
router.get('/api/products', (req, res) => {
  Product.find()
    .then(products => res.status(200).json(products))
    .catch(err => res.status(404).json(err));
});

// READ (ONE)
router.get('/api/products/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) res.status(404).json({ message: 'product not found' });
      res.status(200).json(product)
    })
    .catch(err => res.status(404).json(err));
});

// UPDATE
router.patch('/api/products/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedProduct => res.status(200).json(updatedProduct))
    .catch(err => res.status(404).json(err));
});

// DELETE
router.delete('/api/products/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch(err => res.status(404).json(err));
});


module.exports = router;