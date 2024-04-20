
import { think, YASUNA_03 } from 'cowsay';
function helloYasuna03(options) {
  if (!options) {
    options = {text: 'hello', cow: YASUNA_03, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYasuna03;
    