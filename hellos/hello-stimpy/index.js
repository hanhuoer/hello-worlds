
import { think, STIMPY } from 'cowsay';
function helloStimpy(options) {
  if (!options) {
    options = {text: 'hello', cow: STIMPY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloStimpy;
    