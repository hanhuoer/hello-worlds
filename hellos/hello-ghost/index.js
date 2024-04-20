
import { think, GHOST } from 'cowsay';
function helloGhost(options) {
  if (!options) {
    options = {text: 'hello', cow: GHOST, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloGhost;
    