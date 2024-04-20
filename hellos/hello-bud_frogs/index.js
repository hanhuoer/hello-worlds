
import { think, BUD_FROGS } from 'cowsay';
function helloBudFrogs(options) {
  if (!options) {
    options = {text: 'hello', cow: BUD_FROGS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBudFrogs;
    