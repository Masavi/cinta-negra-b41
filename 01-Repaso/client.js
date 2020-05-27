// const sumar = (num1, num2) => num1 + num2;
// const restar = (num1, num2) => num1 - num2;

/*
  LOS CALLBACKS NO SON ASINCRONOS POR NATURALEZA
*/
// const operaciones = (num1, num2, res1, res2) => {
//   const resultadoSuma = res1(num1, num2);
//   const resultadoResta = res2(resultadoSuma, num1);
//   return resultadoResta;
// }

// console.log(1);
// console.log(operaciones(5,3, sumar, restar));
// console.log("finito jeje");

/*
  REPASO DE PETICIONES CON REQUEST
*/
const request = require('request');

// request.get('https://rickandmortyapi.com/api/character', (err, res, body) => {
//   if (res.statusCode === 200) {
//     const characters = JSON.parse(body).results;
//     characters.map(character => {
//       console.log(character.name);
//     })
//   } else {
//     console.log('Error en la petición');
//   }
// });

// Hypert Text Transfer Protocol
// Protocolo de Transferencia de Hiper Texto

request.get('https://rickandmortyapi.com/api/character', (err, res, body) => {
  return new Promise((resolve, reject) => {
    res.statusCode === 200
      ? resolve(JSON.parse(body).results)
      : reject(`Error ${res.statusCode}`);
  });
})
  .then( res => {console.log(res)} )  // Función Flecha Optimizada
  .catch((err) => { return console.log(err);}); // Función Flecha sin optimizar