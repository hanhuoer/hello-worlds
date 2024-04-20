
import { think, YASUNA_01 } from 'cowsay';
function helloYasuna01(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_01, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna01;
    