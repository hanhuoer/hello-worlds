
import { think, SEAHORSE } from 'cowsay';
function helloSeahorse(options) {
  if (!options) {
    options = {text: 'hello', cow: SEAHORSE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSeahorse;
    