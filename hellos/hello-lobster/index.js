
import { think, LOBSTER } from 'cowsay';
function helloLobster(options) {
  if (!options) {
    options = {text: 'hello', cow: LOBSTER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloLobster;
    