const express = require('express');
const axios = require('axios');
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

/*
 localhost es lo mismo que
 127.0.0.1
*/

// 1.- Agrega un endpoint '/api/' que responda a 
//         una petición de tipo GET con un código de estado 200 
//         y el siguiente json: 
//                     {'mensaje':'hola mundo'}

server.get('/api/', (req, res) => {
  res.status(200).json({ mensaje: 'hola mundo' });
})

//     2.- Agrega un endpoint '/api/suma' que responda a una 
//         petición de tipo GET con la suma de dos números que 
//         reciba mediante las querys num1 y num2. El servidor
//         debe responder con un código de estado 200 y un json 
//         como el siguiente:
//                         {'resultado': 7}

server.get('/api/suma', (req, res) => {
  // GET /api/suma?num1=10&num2=20
  console.log(req.query);
  // const num1 = req.query.num1;
  // const num2 = req.query.num2;
  const { num1, num2 } = req.query;
  res.status(200).json({ resultado: ( parseInt(num1) + parseInt(num2) ) });
});



//     3.- Agrega un endpoint '/api/usuario/' que responda a
//         una petición de tipo GET con el nombre que sea 
//         recibido a través de params. El servidor debe responder
//         con un código de estado 200 y un json como este:
//                       {'usuario': 'Edwin'}

server.get('/api/usuario/:usuario', (req, res) => {
  console.log(req.params);
  res.json({ usuario: req.params.usuario });
});

//     4.- Agrega un endpoint '/api/swapi' que responda a una
//         petición de tipo GET con el personaje solicitado de 
//                         https://swapi.co/
//         El cliente debe mandar el número de personaje mediante
//         params. La respuesta del servidor debe lucir algo así
//                     {'personaje': {
//                         'name': 'Luke Skywalker',
//                         ...,

server.get('/api/swapi/:id', (req, res) => {
  const { id } = req.params;
  const SWAPI_URI = `https://swapi.dev/api/people/${id}/`;
  axios.get(SWAPI_URI)
    .then(axiosResponse => {
      // console.log(res.data);
      const personaje = axiosResponse.data;
      res.json({ personaje })
    })
    .catch(err => {
      // console.log(err);
      res.status(404).json({ err })
    });
})


server.listen(PORT, () => console.log(`Listening on ${PORT}`));

