
import { think, CHEESE } from 'cowsay';
function helloCheese(options) {
  if (!options) {
    options = {text: 'hello', cow: CHEESE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCheese;
    