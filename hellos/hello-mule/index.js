
import { think, MULE } from 'cowsay';
function helloMule(options) {
  if (!options) {
    options = {text: 'hello', cow: MULE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMule;
    