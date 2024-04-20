
import { think, CHITO } from 'cowsay';
function helloChito(options) {
  if (!options) {
    options = {text: 'hello', cow: CHITO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloChito;
    