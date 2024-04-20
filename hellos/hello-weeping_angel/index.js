
import { think, WEEPING_ANGEL } from 'cowsay';
function helloWeepingAngel(options) {
  if (!options) {
    options = {text: 'hello', cow: WEEPING_ANGEL, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloWeepingAngel;
    