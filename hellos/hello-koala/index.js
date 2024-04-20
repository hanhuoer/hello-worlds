
import { think, KOALA } from 'cowsay';
function helloKoala(options) {
  if (!options) {
    options = {text: 'hello', cow: KOALA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKoala;
    