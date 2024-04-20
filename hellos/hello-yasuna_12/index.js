
import { think, YASUNA_12 } from 'cowsay';
function helloYasuna12(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_12, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna12;
    