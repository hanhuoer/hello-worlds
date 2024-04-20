
import { think, CHESSMEN } from 'cowsay';
function helloChessmen(options) {
  if (!options) {
    options = {text: 'hello', cow: CHESSMEN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloChessmen;
    