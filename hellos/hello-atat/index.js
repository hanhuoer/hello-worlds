
import { think, ATAT } from 'cowsay';
function helloAtat(options) {
  if (!options) {
    options = {text: 'hello', cow: ATAT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloAtat;
    