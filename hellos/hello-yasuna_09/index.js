
import { think, YASUNA_09 } from 'cowsay';
function helloYasuna09(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_09, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna09;
    