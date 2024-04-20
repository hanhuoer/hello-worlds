
import { think, YASUNA_18 } from 'cowsay';
function helloYasuna18(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_18, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna18;
    