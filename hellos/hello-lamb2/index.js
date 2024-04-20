
import { think, LAMB2 } from 'cowsay';
function helloLamb2(options) {
  if (!options) {
    options = {text: 'hello', cow: LAMB2, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloLamb2;
    