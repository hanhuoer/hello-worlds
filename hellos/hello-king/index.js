
import { think, KING } from 'cowsay';
function helloKing(options) {
  if (!options) {
    options = {text: 'hello', cow: KING, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKing;
    