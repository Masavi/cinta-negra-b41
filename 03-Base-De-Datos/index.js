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
  const { body } = req;
  Pets.create(body)
    .then(pet => res.status(201).json( pet ))
    .catch(err => res.status(400).json({ err }));
});

// READ (ALL)
server.get('/api/pets', (req, res) => {
  Pets.find()
    .then(pets => res.status(200).json( pets ))
    .catch(err => res.status(400).json({ err }));
});

// READ (ONE)
server.get('/api/pets/:id', (req, res) => {
  const { id } = req.params;
  Pets.findById(id)
    .then(pet => res.status(200).json( pet ))
    .catch(err => res.status(404).json({ err }));
});

// UPDATE
server.patch('/api/pets/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Pets.findByIdAndUpdate(id, body, { new: true })
    .then(pet => res.status(200).json( pet ))
    .catch(err => res.status(404).json({ err }));
});

// DELETE
server.delete('/api/pets/:id', (req, res) => {
  const { id } = req.params;
  Pets.findByIdAndDelete(id)
    .then(res => res.status(204).send())
    .catch(err => res.status(404).json({ err }));
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));


