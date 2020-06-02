const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  - Ticket
    -subtotal (number)
    -IVA (number)
    -total (number)
    -articulos (articulo)

    [ObjectIDs]
    [5ad4dkacajcn3, q244nadadnad]
*/

const ticketsSchema = new Schema({
  subtotal: {
    type: Number,
    default: 0
  },
  tax: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  },
  /*
    https://mongoosejs.com/docs/populate.html
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  */ 
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
  }],
});

const Ticket = mongoose.model('Ticket', ticketsSchema);

module.exports = Ticket;
