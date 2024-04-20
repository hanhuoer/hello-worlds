
import { think, CHARLIE } from 'cowsay';
function helloCharlie(options) {
  if (!options) {
    options = {text: 'hello', cow: CHARLIE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCharlie;
    