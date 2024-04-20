
import { think, BROKEN_HEART } from 'cowsay';
function helloBrokenHeart(options) {
  if (!options) {
    options = {text: 'hello', cow: BROKEN_HEART, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBrokenHeart;
    