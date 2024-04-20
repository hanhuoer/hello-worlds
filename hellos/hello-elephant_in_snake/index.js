
import { think, ELEPHANT_IN_SNAKE } from 'cowsay';
function helloElephantInSnake(options) {
  if (!options) {
    options = {text: 'hello', cow: ELEPHANT_IN_SNAKE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloElephantInSnake;
    