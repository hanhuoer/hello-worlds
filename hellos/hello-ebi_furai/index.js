
import { think, EBI_FURAI } from 'cowsay';
function helloEbiFurai(options) {
  if (!options) {
    options = {text: 'hello', cow: EBI_FURAI, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloEbiFurai;
    