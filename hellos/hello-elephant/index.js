
import { think, ELEPHANT } from 'cowsay';
function helloElephant(options) {
  if (!options) {
    options = {text: 'hello', cow: ELEPHANT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloElephant;
    