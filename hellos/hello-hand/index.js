
import { think, HAND } from 'cowsay';
function helloHand(options) {
  if (!options) {
    options = {text: 'hello', cow: HAND, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHand;
    