
import { think, SQUIRREL } from 'cowsay';
function helloSquirrel(options) {
  if (!options) {
    options = {text: 'hello', cow: SQUIRREL, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSquirrel;
    