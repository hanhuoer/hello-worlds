
import { think, YASUNA_17 } from 'cowsay';
function helloYasuna17(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_17, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna17;
    