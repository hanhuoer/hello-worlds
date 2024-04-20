
import { think, KISS } from 'cowsay';
function helloKiss(options) {
  if (!options) {
    options = {text: 'hello', cow: KISS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKiss;
    