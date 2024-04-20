
import { think, PINBALL_MACHINE } from 'cowsay';
function helloPinballMachine(options) {
  if (!options) {
    options = {text: 'hello', cow: PINBALL_MACHINE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloPinballMachine;
    