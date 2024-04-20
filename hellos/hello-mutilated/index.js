
import { think, MUTILATED } from 'cowsay';
function helloMutilated(options) {
  if (!options) {
    options = {text: 'hello', cow: MUTILATED, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMutilated;
    