
import { think, WHALE } from 'cowsay';
function helloWhale(options) {
  if (!options) {
    options = {text: 'hello', cow: WHALE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloWhale;
    