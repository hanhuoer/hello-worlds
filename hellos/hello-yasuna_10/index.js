
import { think, YASUNA_10 } from 'cowsay';
function helloYasuna10(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_10, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna10;
    