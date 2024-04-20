
import { think, YASUNA_04 } from 'cowsay';
function helloYasuna04(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_04, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna04;
    