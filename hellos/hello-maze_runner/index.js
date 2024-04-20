
import { think, MAZE_RUNNER } from 'cowsay';
function helloMazeRunner(options) {
  if (!options) {
    options = {text: 'hello', cow: MAZE_RUNNER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMazeRunner;
    