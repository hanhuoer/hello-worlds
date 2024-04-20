
import { think, DEFAULT } from 'cowsay';
function helloDefault(options) {
  if (!options) {
    options = {text: 'hello', cow: DEFAULT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDefault;
    