
import { think, WWW } from 'cowsay';
function helloWww(options) {
  if (!options) {
    options = {text: 'hello', cow: WWW, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloWww;
    