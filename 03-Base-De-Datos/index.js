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

// Mongoose es un ODM -> Object Document Mapping
// Pets.create Pets.find // Pets es un MODELO
// Crear un modelo require de un ESQUEMA
const petsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: String,
  sex: String,
  weight: Number,
  type: {
    type: String,
    required: true,
  },
  vaccine: [String],
});

const Pets = mongoose.model('Pets', petsSchema);

// Configuración de middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

// Endpoints
server.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

/*
  OBJETIVO: CREAR UN CRUD DE UNA COLECCIÓN BÁSICA
*/

// CREATE
server.post('/api/pets', (req, res) => {
  // Intento crear y guradar en la base de datos una pet
  res.status(201).json({});
});

// READ (ALL)
server.get('/api/pets', (req, res) => {
  // Busco y obtengo todos los pets en la BD
  res.status(200).json({});
});

// READ (ONE)
server.get('/api/pets/:id', (req, res) => {
  const { id } = req.params;
  // Utilizo el ID para buscar en la BD
  res.status(200).json({});
});

// UPDATE
server.patch('/api/pets/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  // Utilizo el BODY y el ID para buscar y actualizar en la BD
  res.status(200).json({});
});

// DELETE
server.delete('/api/pets/:id', (req, res) => {
  const { id } = req.params;
  // Utilizo el ID para buscar y borrar en la BD
  res.status(204).json({});
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));


