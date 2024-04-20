
import { think, ROBOT } from 'cowsay';
function helloRobot(options) {
  if (!options) {
    options = {text: 'hello', cow: ROBOT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloRobot;
    