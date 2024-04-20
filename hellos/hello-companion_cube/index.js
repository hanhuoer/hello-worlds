
import { think, COMPANION_CUBE } from 'cowsay';
function helloCompanionCube(options) {
  if (!options) {
    options = {text: 'hello', cow: COMPANION_CUBE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCompanionCube;
    