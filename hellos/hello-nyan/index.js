
import { think, NYAN } from 'cowsay';
function helloNyan(options) {
  if (!options) {
    options = {text: 'hello', cow: NYAN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloNyan;
    