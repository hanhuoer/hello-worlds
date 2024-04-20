
import { think, FAT_BANANA } from 'cowsay';
function helloFatBanana(options) {
  if (!options) {
    options = {text: 'hello', cow: FAT_BANANA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloFatBanana;
    