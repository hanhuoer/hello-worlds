
import { think, RADIO } from 'cowsay';
function helloRadio(options) {
  if (!options) {
    options = {text: 'hello', cow: RADIO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloRadio;
    