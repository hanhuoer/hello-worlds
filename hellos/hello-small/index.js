
import { think, SMALL } from 'cowsay';
function helloSmall(options) {
  if (!options) {
    options = {text: 'hello', cow: SMALL, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSmall;
    