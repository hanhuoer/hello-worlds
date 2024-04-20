
import { think, CUBE } from 'cowsay';
function helloCube(options) {
  if (!options) {
    options = {text: 'hello', cow: CUBE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCube;
    