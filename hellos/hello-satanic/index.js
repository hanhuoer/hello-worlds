
import { think, SATANIC } from 'cowsay';
function helloSatanic(options) {
  if (!options) {
    options = {text: 'hello', cow: SATANIC, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSatanic;
    