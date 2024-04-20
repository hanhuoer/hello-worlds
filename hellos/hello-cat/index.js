
import { think, CAT } from 'cowsay';
function helloCat(options) {
  if (!options) {
    options = {text: 'hello', cow: CAT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCat;
    