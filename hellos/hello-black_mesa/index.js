
import { think, BLACK_MESA } from 'cowsay';
function helloBlackMesa(options) {
  if (!options) {
    options = {text: 'hello', cow: BLACK_MESA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBlackMesa;
    