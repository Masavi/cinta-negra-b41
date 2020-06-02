const mongoose = require('mongoose');

/*
 1) Crear una base de datos para un supermercado que pueda 
    almacenar lo siguiente:
    - Artículo
        -Nombre (string)
        -Precio (number)
        -Existencias (number)

*/

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required:true,
  },
  stock: {
    type: Number,
    default: 50,
  }
});

const Product = mongoose.model('Product', productsSchema);

module.exports = Product;