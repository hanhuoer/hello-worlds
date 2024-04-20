
import { think, CAKE } from 'cowsay';
function helloCake(options) {
  if (!options) {
    options = {text: 'hello', cow: CAKE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCake;
    