
import { think, BEES } from 'cowsay';
function helloBees(options) {
  if (!options) {
    options = {text: 'hello', cow: BEES, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBees;
    