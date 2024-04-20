
import { think, RENGE } from 'cowsay';
function helloRenge(options) {
  if (!options) {
    options = {text: 'hello', cow: RENGE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloRenge;
    