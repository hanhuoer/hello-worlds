
import { think, FLAMING_SHEEP } from 'cowsay';
function helloFlamingSheep(options) {
  if (!options) {
    options = {text: 'hello', cow: FLAMING_SHEEP, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloFlamingSheep;
    