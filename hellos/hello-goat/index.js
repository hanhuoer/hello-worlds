
import { think, GOAT } from 'cowsay';
function helloGoat(options) {
  if (!options) {
    options = {text: 'hello', cow: GOAT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloGoat;
    