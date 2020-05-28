// // Accede y consume alguno de los endpoints de las siguientes APIs:
const request = require('request');

// // 1) https://ghibliapi.herokuapp.com/#
// const promiseGhibli = new Promise((resolve, reject) => {
//     request.get('https://ghibliapi.herokuapp.com/people/', (err, res, body) => {
//       if (res.statusCode === 200) resolve(JSON.parse(body));
//       reject(`${res.statusCode} - ${err}`);
//   });
// });

// // promiseGhibli
// //   .then(characters => characters.map(character => console.log(character.name)))
// //   .catch(laNombroComoYoQuiera => console.log(laNombroComoYoQuiera));


// // 2) https://www.last.fm/api/
const getArtistTags = (searchArtist) => {
  const LASTFM_URI = `http://ws.audioscrobbler.com/2.0/?method=artist.getTags&artist=${searchArtist}&user=RJ&api_key=dfb1b6ad3ed6e48ed5a1eb041d7ed190&format=json`;

  return new Promise((resolve, reject) => {
    request.get(LASTFM_URI, (err, res, body) => {
      if (res.statusCode === 200) resolve(JSON.parse(body));
      reject(res.statusCode);
    });
  });
};

getArtistTags('Red Hot Chili Peppers')
  .then(res => {
    const tags = res.tags.tag;
    const { artist } = res.tags["@attr"];
    // if ([]) -> true
    // if (!undefined) -> true
    if (!tags) return console.log(`${artist} has no tags`);
    console.log(`\n${artist} has ${tags.length} genre tags:`);
    tags.map(tag => console.log('-',tag.name));
  })
  .catch(err => console.log(err));


// // 3) https://bhagavadgita.io/api/

/*
  Ejemplo de valores "Falsy"
*/
// if (!undefined) { console.log('Simon'); }
// else { console.log('Nel'); }