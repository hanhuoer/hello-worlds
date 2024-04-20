
import { think, KNIGHT } from 'cowsay';
function helloKnight(options) {
  if (!options) {
    options = {text: 'hello', cow: KNIGHT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKnight;
    