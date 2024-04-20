
import { think, REN } from 'cowsay';
function helloRen(options) {
  if (!options) {
    options = {text: 'hello', cow: REN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloRen;
    