
import { think, THREADER } from 'cowsay';
function helloThreader(options) {
  if (!options) {
    options = {text: 'hello', cow: THREADER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloThreader;
    