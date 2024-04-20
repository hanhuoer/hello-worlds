
import { think, JELLYFISH } from 'cowsay';
function helloJellyfish(options) {
  if (!options) {
    options = {text: 'hello', cow: JELLYFISH, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloJellyfish;
    