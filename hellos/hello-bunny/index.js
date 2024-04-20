
import { think, BUNNY } from 'cowsay';
function helloBunny(options) {
  if (!options) {
    options = {text: 'hello', cow: BUNNY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBunny;
    