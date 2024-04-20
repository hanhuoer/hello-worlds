
import { think, ROOK } from 'cowsay';
function helloRook(options) {
  if (!options) {
    options = {text: 'hello', cow: ROOK, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloRook;
    