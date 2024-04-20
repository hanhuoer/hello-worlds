
import { think, MINOTAUR } from 'cowsay';
function helloMinotaur(options) {
  if (!options) {
    options = {text: 'hello', cow: MINOTAUR, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMinotaur;
    