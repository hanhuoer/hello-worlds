
import { think, WOOD } from 'cowsay';
function helloWood(options) {
  if (!options) {
    options = {text: 'hello', cow: WOOD, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloWood;
    