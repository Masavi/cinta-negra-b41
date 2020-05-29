const mongoose = require('mongoose');
const express = require('express');
const server = express();
const PORT = 4000;

// Tomar la URL de conexion de Mongo Atlas
// Sustituir usuario y contraseña en esa URL
const MONGO_URI = 'mongodb://maui:abc123def@cinta-negra-shard-00-00-efwi5.mongodb.net:27017,cinta-negra-shard-00-01-efwi5.mongodb.net:27017,cinta-negra-shard-00-02-efwi5.mongodb.net:27017/test?ssl=true&replicaSet=cinta-negra-shard-0&authSource=admin&retryWrites=true&w=majority';
// Conexión a Mongo Atlas
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successful connection to Atlas'))
  .catch(() => console.log('Atlas connection error...'));

// Configuración de middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

/*
  OBJETIVO: CREAR UN CRUD DE UNA COLECCIÓN BÁSICA
*/

// Endpoints
server.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));


