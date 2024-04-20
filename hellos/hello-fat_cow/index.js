
import { think, FAT_COW } from 'cowsay';
function helloFatCow(options) {
  if (!options) {
    options = {text: 'hello', cow: FAT_COW, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloFatCow;
    