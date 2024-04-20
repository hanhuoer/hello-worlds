
import { think, EXPLOSION } from 'cowsay';
function helloExplosion(options) {
  if (!options) {
    options = {text: 'hello', cow: EXPLOSION, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloExplosion;
    