
import { think, SEAHORSE_BIG } from 'cowsay';
function helloSeahorseBig(options) {
  if (!options) {
    options = {text: 'hello', cow: SEAHORSE_BIG, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSeahorseBig;
    