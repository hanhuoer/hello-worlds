
import { think, DRAGON } from 'cowsay';
function helloDragon(options) {
  if (!options) {
    options = {text: 'hello', cow: DRAGON, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDragon;
    