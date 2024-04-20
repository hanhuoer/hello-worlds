
import { think, SACHIKO } from 'cowsay';
function helloSachiko(options) {
  if (!options) {
    options = {text: 'hello', cow: SACHIKO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSachiko;
    