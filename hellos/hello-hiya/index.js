
import { think, HIYA } from 'cowsay';
function helloHiya(options) {
  if (!options) {
    options = {text: 'hello', cow: HIYA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHiya;
    