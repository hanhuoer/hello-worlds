
import { think, SPIDERCOW } from 'cowsay';
function helloSpidercow(options) {
  if (!options) {
    options = {text: 'hello', cow: SPIDERCOW, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSpidercow;
    