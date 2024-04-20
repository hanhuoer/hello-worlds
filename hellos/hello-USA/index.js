
import { think, USA } from 'cowsay';
function helloUsa(options) {
  if (!options) {
    options = {text: 'hello', cow: USA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloUsa;
    