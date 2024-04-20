
import { think, YASUNA_02 } from 'cowsay';
function helloYasuna02(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_02, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna02;
    