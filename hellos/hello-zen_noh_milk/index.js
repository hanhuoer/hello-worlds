
import { think, ZEN_NOH_MILK } from 'cowsay';
function helloZenNohMilk(options) {
  if (!options) {
    options = {text: 'hello', cow: ZEN_NOH_MILK, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloZenNohMilk;
    