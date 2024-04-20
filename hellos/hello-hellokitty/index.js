
import { think, HELLOKITTY } from 'cowsay';
function helloHellokitty(options) {
  if (!options) {
    options = {text: 'hello', cow: HELLOKITTY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHellokitty;
    