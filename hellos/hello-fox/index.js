
import { think, FOX } from 'cowsay';
function helloFox(options) {
  if (!options) {
    options = {text: 'hello', cow: FOX, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloFox;
    