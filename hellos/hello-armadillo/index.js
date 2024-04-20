
import { think, ARMADILLO } from 'cowsay';
function helloArmadillo(options) {
  if (!options) {
    options = {text: 'hello', cow: ARMADILLO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloArmadillo;
    