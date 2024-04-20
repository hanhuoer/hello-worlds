
import { think, BIOHAZARD } from 'cowsay';
function helloBiohazard(options) {
  if (!options) {
    options = {text: 'hello', cow: BIOHAZARD, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBiohazard;
    