
import { think, ATOM } from 'cowsay';
function helloAtom(options) {
  if (!options) {
    options = {text: 'hello', cow: ATOM, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloAtom;
    