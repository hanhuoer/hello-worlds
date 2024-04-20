
import { think, FENCE } from 'cowsay';
function helloFence(options) {
  if (!options) {
    options = {text: 'hello', cow: FENCE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloFence;
    