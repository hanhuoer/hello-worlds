
import { think, YASUNA_11 } from 'cowsay';
function helloYasuna11(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_11, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna11;
    