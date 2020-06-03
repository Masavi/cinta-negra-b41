const express = require('express');
const server = express();
const path = require('path');
const cors = require('cors');
const PORT = 4040;

server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));
server.use(cors());

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Product
const ProductRoutes = require('../routes/ProductRoutes');
server.use(ProductRoutes);

// Ticket
const TicketRoutes = require('../routes/TicketRoutes');
server.use(TicketRoutes);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));