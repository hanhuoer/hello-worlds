
import { think, OCTOPUS } from 'cowsay';
function helloOctopus(options) {
  if (!options) {
    options = {text: 'hello', cow: OCTOPUS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloOctopus;
    