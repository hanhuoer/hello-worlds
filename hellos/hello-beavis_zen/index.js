
import { think, BEAVIS_ZEN } from 'cowsay';
function helloBeavisZen(options) {
  if (!options) {
    options = {text: 'hello', cow: BEAVIS_ZEN, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBeavisZen;
    