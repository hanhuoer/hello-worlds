
import { think, COWER } from 'cowsay';
function helloCower(options) {
  if (!options) {
    options = {text: 'hello', cow: COWER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCower;
    