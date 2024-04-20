
import { think, DALEK } from 'cowsay';
function helloDalek(options) {
  if (!options) {
    options = {text: 'hello', cow: DALEK, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDalek;
    