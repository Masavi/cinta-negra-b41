const express = require('express');
const server = express();
const PORT = 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json({ extended: true }));

server.get('/', (req, res) => res.status(201).send('¡Hola Mundo!'));

server.get('/perfil', (req, res) => res.json({
  first_name: 'Maui',
  last_name: 'Saavedra',
}));

server.post('/perfil', (req, res) => {
  // request -> petición del cliente
  // response -> respuesta hacia el cliente
  const { body } = req;
  console.log(body.nombre);
  console.log(body.edad);
  // Aqui voy a la base de datos
  // Y le pido que guarde el usuario con nombre y edad
  // provistos por el cliente
  res.send('Hiciste post!');
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

/*
 localhost es lo mismo que
 127.0.0.1
*/