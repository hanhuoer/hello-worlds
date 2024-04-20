
import { think, PAWN } from 'cowsay';
function helloPawn(options) {
  if (!options) {
    options = {text: 'hello', cow: PAWN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloPawn;
    