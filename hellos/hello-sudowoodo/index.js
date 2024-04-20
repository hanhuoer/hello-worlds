
import { think, SUDOWOODO } from 'cowsay';
function helloSudowoodo(options) {
  if (!options) {
    options = {text: 'hello', cow: SUDOWOODO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSudowoodo;
    