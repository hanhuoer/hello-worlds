
import { think, CAT2 } from 'cowsay';
function helloCat2(options) {
  if (!options) {
    options = {text: 'hello', cow: CAT2, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCat2;
    