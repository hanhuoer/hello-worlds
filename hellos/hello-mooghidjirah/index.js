
import { think, MOOGHIDJIRAH } from 'cowsay';
function helloMooghidjirah(options) {
  if (!options) {
    options = {text: 'hello', cow: MOOGHIDJIRAH, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMooghidjirah;
    