const express = require('express');
const server = express();
const PORT = 4040;

server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// Product
const ProductRoutes = require('../routes/ProductRoutes');
server.use(ProductRoutes);

// Ticket
const TicketRoutes = require('../routes/TicketRoutes');
server.use(TicketRoutes);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));