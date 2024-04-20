
import { think, MECH_AND_COW } from 'cowsay';
function helloMechAndCow(options) {
  if (!options) {
    options = {text: 'hello', cow: MECH_AND_COW, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMechAndCow;
    