
import { think, ELEPHANT2 } from 'cowsay';
function helloElephant2(options) {
  if (!options) {
    options = {text: 'hello', cow: ELEPHANT2, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloElephant2;
    