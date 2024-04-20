
import { think, SUPERMILKER } from 'cowsay';
function helloSupermilker(options) {
  if (!options) {
    options = {text: 'hello', cow: SUPERMILKER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSupermilker;
    