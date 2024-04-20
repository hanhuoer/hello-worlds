
import { think, MILK } from 'cowsay';
function helloMilk(options) {
  if (!options) {
    options = {text: 'hello', cow: MILK, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMilk;
    