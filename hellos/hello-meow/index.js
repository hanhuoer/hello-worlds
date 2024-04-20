
import { think, MEOW } from 'cowsay';
function helloMeow(options) {
  if (!options) {
    options = {text: 'hello', cow: MEOW, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMeow;
    