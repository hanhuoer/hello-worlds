
import { think, EYES } from 'cowsay';
function helloEyes(options) {
  if (!options) {
    options = {text: 'hello', cow: EYES, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloEyes;
    