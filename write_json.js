const fs = require('fs');

const pokemonObj = {
  id : 1,
  name : "이상해씨",
  type : "풀",
};

const pokemonJSON = JSON.stringify(pokemonObj, null, 2);

console.log(pokemonJSON);

fs.writeFile('./pokemonJSON.json', pokemonJSON, (err) => {
  if(err) throw err;
});