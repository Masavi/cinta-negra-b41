const mongoose = require('mongoose');

// Tomar la URL de conexion de Mongo Atlas
// Sustituir usuario y contraseña en esa URL
const MONGO_URI = 'mongodb://maui:abc123def@cinta-negra-shard-00-00-efwi5.mongodb.net:27017,cinta-negra-shard-00-01-efwi5.mongodb.net:27017,cinta-negra-shard-00-02-efwi5.mongodb.net:27017/test?ssl=true&replicaSet=cinta-negra-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(MONGO_URI)
  .then(() => console.log('Conexion exitosa'))
  .catch(() => console.log('Error en la URI de conexion'));

/*
  OBJETIVO: CREAR UN CRUD DE UNA COLECCIÓN BÁSICA
*/