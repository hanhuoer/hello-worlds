
import { think, LOLLERSKATES } from 'cowsay';
function helloLollerskates(options) {
  if (!options) {
    options = {text: 'hello', cow: LOLLERSKATES, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloLollerskates;
    