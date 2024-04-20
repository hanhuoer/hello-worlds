
import { think, YASUNA_14 } from 'cowsay';
function helloYasuna14(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_14, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna14;
    