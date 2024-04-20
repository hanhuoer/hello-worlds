
import { think, YASUNA_16 } from 'cowsay';
function helloYasuna16(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_16, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna16;
    