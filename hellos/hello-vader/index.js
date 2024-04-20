
import { think, VADER } from 'cowsay';
function helloVader(options) {
  if (!options) {
    options = {text: 'hello', cow: VADER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloVader;
    