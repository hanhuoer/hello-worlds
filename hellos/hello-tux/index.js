
import { think, TUX } from 'cowsay';
function helloTux(options) {
  if (!options) {
    options = {text: 'hello', cow: TUX, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTux;
    