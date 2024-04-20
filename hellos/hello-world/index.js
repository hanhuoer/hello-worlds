
import { think, WORLD } from 'cowsay';
function helloWorld(options) {
  if (!options) {
    options = {text: 'hello', cow: WORLD, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloWorld;
    