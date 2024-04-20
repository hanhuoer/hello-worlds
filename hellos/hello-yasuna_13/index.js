
import { think, YASUNA_13 } from 'cowsay';
function helloYasuna13(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_13, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna13;
    