
import { think, DRAGON_AND_COW } from 'cowsay';
function helloDragonAndCow(options) {
  if (!options) {
    options = {text: 'hello', cow: DRAGON_AND_COW, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDragonAndCow;
    