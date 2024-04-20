
import { think, SNOOPYHOUSE } from 'cowsay';
function helloSnoopyhouse(options) {
  if (!options) {
    options = {text: 'hello', cow: SNOOPYHOUSE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSnoopyhouse;
    