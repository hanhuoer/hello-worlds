
import { think, GOAT2 } from 'cowsay';
function helloGoat2(options) {
  if (!options) {
    options = {text: 'hello', cow: GOAT2, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloGoat2;
    