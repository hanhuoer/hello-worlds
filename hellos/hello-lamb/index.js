
import { think, LAMB } from 'cowsay';
function helloLamb(options) {
  if (!options) {
    options = {text: 'hello', cow: LAMB, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloLamb;
    