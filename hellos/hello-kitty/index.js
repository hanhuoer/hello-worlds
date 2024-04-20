
import { think, KITTY } from 'cowsay';
function helloKitty(options) {
  if (!options) {
    options = {text: 'hello', cow: KITTY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKitty;
    