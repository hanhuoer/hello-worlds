
import { think, BANANA } from 'cowsay';
function helloBanana(options) {
  if (!options) {
    options = {text: 'hello', cow: BANANA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBanana;
    