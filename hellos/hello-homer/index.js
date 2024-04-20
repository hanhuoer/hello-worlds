
import { think, HOMER } from 'cowsay';
function helloHomer(options) {
  if (!options) {
    options = {text: 'hello', cow: HOMER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHomer;
    