
import { think, YASUNA_03A } from 'cowsay';
function helloYasuna03a(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_03A, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna03a;
    