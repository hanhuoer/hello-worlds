
import { think, HEDGEHOG } from 'cowsay';
function helloHedgehog(options) {
  if (!options) {
    options = {text: 'hello', cow: HEDGEHOG, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHedgehog;
    