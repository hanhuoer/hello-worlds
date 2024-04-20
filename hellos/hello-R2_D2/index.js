
import { think, R2_D2 } from 'cowsay';
function helloR2D2(options) {
  if (!options) {
    options = {text: 'hello', cow: R2_D2, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloR2D2;
    