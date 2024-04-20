
import { think, DOGE } from 'cowsay';
function helloDoge(options) {
  if (!options) {
    options = {text: 'hello', cow: DOGE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDoge;
    