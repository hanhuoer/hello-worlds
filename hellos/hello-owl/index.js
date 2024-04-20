
import { think, OWL } from 'cowsay';
function helloOwl(options) {
  if (!options) {
    options = {text: 'hello', cow: OWL, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloOwl;
    