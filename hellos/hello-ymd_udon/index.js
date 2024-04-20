
import { think, YMD_UDON } from 'cowsay';
function helloYmdUdon(options) {
  if (!options) {
    options = {text: 'hello', cow: YMD_UDON, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloYmdUdon;
    