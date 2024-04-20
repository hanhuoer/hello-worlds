
import { think, MOOSE } from 'cowsay';
function helloMoose(options) {
  if (!options) {
    options = {text: 'hello', cow: MOOSE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMoose;
    