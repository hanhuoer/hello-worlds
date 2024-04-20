
import { think, YASUNA_05 } from 'cowsay';
function helloYasuna05(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_05, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna05;
    