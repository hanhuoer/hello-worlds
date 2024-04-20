
import { think, OKAZU } from 'cowsay';
function helloOkazu(options) {
  if (!options) {
    options = {text: 'hello', cow: OKAZU, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloOkazu;
    