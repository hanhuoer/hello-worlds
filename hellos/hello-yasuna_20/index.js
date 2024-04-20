
import { think, YASUNA_20 } from 'cowsay';
function helloYasuna20(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_20, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna20;
    