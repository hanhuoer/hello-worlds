
import { think, TABLEFLIP } from 'cowsay';
function helloTableflip(options) {
  if (!options) {
    options = {text: 'hello', cow: TABLEFLIP, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTableflip;
    