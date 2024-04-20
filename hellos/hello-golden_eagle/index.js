
import { think, GOLDEN_EAGLE } from 'cowsay';
function helloGoldenEagle(options) {
  if (!options) {
    options = {text: 'hello', cow: GOLDEN_EAGLE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloGoldenEagle;
    