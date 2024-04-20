
import { think, FIRE } from 'cowsay';
function helloFire(options) {
  if (!options) {
    options = {text: 'hello', cow: FIRE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloFire;
    