
import { think, STEGOSAURUS } from 'cowsay';
function helloStegosaurus(options) {
  if (!options) {
    options = {text: 'hello', cow: STEGOSAURUS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloStegosaurus;
    