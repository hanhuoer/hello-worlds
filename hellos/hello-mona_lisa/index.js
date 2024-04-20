
import { think, MONA_LISA } from 'cowsay';
function helloMonaLisa(options) {
  if (!options) {
    options = {text: 'hello', cow: MONA_LISA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMonaLisa;
    