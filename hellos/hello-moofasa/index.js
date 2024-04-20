
import { think, MOOFASA } from 'cowsay';
function helloMoofasa(options) {
  if (!options) {
    options = {text: 'hello', cow: MOOFASA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMoofasa;
    