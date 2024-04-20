
import { think, BEARFACE } from 'cowsay';
function helloBearface(options) {
  if (!options) {
    options = {text: 'hello', cow: BEARFACE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBearface;
    