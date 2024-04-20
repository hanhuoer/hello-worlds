
import { think, TURKEY } from 'cowsay';
function helloTurkey(options) {
  if (!options) {
    options = {text: 'hello', cow: TURKEY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTurkey;
    