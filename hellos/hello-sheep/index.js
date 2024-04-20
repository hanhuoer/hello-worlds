
import { think, SHEEP } from 'cowsay';
function helloSheep(options) {
  if (!options) {
    options = {text: 'hello', cow: SHEEP, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSheep;
    