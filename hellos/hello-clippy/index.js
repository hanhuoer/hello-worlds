
import { think, CLIPPY } from 'cowsay';
function helloClippy(options) {
  if (!options) {
    options = {text: 'hello', cow: CLIPPY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloClippy;
    