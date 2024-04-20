
import { think, BONG } from 'cowsay';
function helloBong(options) {
  if (!options) {
    options = {text: 'hello', cow: BONG, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBong;
    