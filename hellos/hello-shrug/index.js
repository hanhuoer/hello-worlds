
import { think, SHRUG } from 'cowsay';
function helloShrug(options) {
  if (!options) {
    options = {text: 'hello', cow: SHRUG, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloShrug;
    