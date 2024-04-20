
import { think, THREECUBES } from 'cowsay';
function helloThreecubes(options) {
  if (!options) {
    options = {text: 'hello', cow: THREECUBES, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloThreecubes;
    