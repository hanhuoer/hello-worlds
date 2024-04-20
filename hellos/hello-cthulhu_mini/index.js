
import { think, CTHULHU_MINI } from 'cowsay';
function helloCthulhuMini(options) {
  if (!options) {
    options = {text: 'hello', cow: CTHULHU_MINI, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCthulhuMini;
    