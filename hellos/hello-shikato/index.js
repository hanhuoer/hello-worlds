
import { think, SHIKATO } from 'cowsay';
function helloShikato(options) {
  if (!options) {
    options = {text: 'hello', cow: SHIKATO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloShikato;
    