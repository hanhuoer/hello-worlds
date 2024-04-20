
import { think, CATFENCE } from 'cowsay';
function helloCatfence(options) {
  if (!options) {
    options = {text: 'hello', cow: CATFENCE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCatfence;
    