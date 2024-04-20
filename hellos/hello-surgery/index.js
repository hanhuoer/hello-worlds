
import { think, SURGERY } from 'cowsay';
function helloSurgery(options) {
  if (!options) {
    options = {text: 'hello', cow: SURGERY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSurgery;
    