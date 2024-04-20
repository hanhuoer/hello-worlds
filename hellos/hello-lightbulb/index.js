
import { think, LIGHTBULB } from 'cowsay';
function helloLightbulb(options) {
  if (!options) {
    options = {text: 'hello', cow: LIGHTBULB, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloLightbulb;
    