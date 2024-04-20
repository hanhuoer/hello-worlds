
import { think, SMILING_OCTOPUS } from 'cowsay';
function helloSmilingOctopus(options) {
  if (!options) {
    options = {text: 'hello', cow: SMILING_OCTOPUS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSmilingOctopus;
    