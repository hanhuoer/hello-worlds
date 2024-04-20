
import { think, YASUNA_06 } from 'cowsay';
function helloYasuna06(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_06, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna06;
    