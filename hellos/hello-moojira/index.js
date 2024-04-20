
import { think, MOOJIRA } from 'cowsay';
function helloMoojira(options) {
  if (!options) {
    options = {text: 'hello', cow: MOOJIRA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMoojira;
    