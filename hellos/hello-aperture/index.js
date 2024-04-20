
import { think, APERTURE } from 'cowsay';
function helloAperture(options) {
  if (!options) {
    options = {text: 'hello', cow: APERTURE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloAperture;
    