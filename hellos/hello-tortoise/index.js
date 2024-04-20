
import { think, TORTOISE } from 'cowsay';
function helloTortoise(options) {
  if (!options) {
    options = {text: 'hello', cow: TORTOISE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTortoise;
    