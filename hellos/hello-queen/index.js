
import { think, QUEEN } from 'cowsay';
function helloQueen(options) {
  if (!options) {
    options = {text: 'hello', cow: QUEEN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloQueen;
    