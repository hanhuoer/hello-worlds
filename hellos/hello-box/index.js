
import { think, BOX } from 'cowsay';
function helloBox(options) {
  if (!options) {
    options = {text: 'hello', cow: BOX, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBox;
    