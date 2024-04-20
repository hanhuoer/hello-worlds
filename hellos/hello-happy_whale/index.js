
import { think, HAPPY_WHALE } from 'cowsay';
function helloHappyWhale(options) {
  if (!options) {
    options = {text: 'hello', cow: HAPPY_WHALE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHappyWhale;
    