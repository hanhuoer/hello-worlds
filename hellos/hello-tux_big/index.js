
import { think, TUX_BIG } from 'cowsay';
function helloTuxBig(options) {
  if (!options) {
    options = {text: 'hello', cow: TUX_BIG, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTuxBig;
    