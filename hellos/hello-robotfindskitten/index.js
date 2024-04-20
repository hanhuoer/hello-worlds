
import { think, ROBOTFINDSKITTEN } from 'cowsay';
function helloRobotfindskitten(options) {
  if (!options) {
    options = {text: 'hello', cow: ROBOTFINDSKITTEN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloRobotfindskitten;
    