
import { think, KOSH } from 'cowsay';
function helloKosh(options) {
  if (!options) {
    options = {text: 'hello', cow: KOSH, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKosh;
    