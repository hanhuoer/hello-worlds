
import { think, GLADOS } from 'cowsay';
function helloGlados(options) {
  if (!options) {
    options = {text: 'hello', cow: GLADOS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloGlados;
    