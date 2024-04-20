
import { think, C3PO } from 'cowsay';
function helloC3po(options) {
  if (!options) {
    options = {text: 'hello', cow: C3PO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloC3po;
    