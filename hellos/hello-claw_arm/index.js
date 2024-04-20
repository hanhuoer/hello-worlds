
import { think, CLAW_ARM } from 'cowsay';
function helloClawArm(options) {
  if (!options) {
    options = {text: 'hello', cow: CLAW_ARM, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloClawArm;
    