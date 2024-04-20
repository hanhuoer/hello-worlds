
import { think, IWASHI } from 'cowsay';
function helloIwashi(options) {
  if (!options) {
    options = {text: 'hello', cow: IWASHI, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloIwashi;
    