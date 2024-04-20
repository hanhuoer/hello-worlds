
import { think, YASUNA_07 } from 'cowsay';
function helloYasuna07(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_07, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna07;
    