
import { think, TURTLE } from 'cowsay';
function helloTurtle(options) {
  if (!options) {
    options = {text: 'hello', cow: TURTLE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTurtle;
    