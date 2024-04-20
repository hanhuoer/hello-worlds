
import { think, ROFLCOPTER } from 'cowsay';
function helloRoflcopter(options) {
  if (!options) {
    options = {text: 'hello', cow: ROFLCOPTER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloRoflcopter;
    