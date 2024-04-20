
import { think, APERTURE_BLANK } from 'cowsay';
function helloApertureBlank(options) {
  if (!options) {
    options = {text: 'hello', cow: APERTURE_BLANK, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloApertureBlank;
    