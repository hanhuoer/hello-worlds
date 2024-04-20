
import { think, DOLPHIN } from 'cowsay';
function helloDolphin(options) {
  if (!options) {
    options = {text: 'hello', cow: DOLPHIN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDolphin;
    