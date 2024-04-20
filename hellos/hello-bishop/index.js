
import { think, BISHOP } from 'cowsay';
function helloBishop(options) {
  if (!options) {
    options = {text: 'hello', cow: BISHOP, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBishop;
    