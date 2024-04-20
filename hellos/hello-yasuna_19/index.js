
import { think, YASUNA_19 } from 'cowsay';
function helloYasuna19(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_19, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna19;
    