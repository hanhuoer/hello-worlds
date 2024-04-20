
import { think, KITTEN } from 'cowsay';
function helloKitten(options) {
  if (!options) {
    options = {text: 'hello', cow: KITTEN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKitten;
    