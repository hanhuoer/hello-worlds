
import { think, KARL_MARX } from 'cowsay';
function helloKarlMarx(options) {
  if (!options) {
    options = {text: 'hello', cow: KARL_MARX, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKarlMarx;
    