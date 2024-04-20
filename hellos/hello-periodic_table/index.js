
import { think, PERIODIC_TABLE } from 'cowsay';
function helloPeriodicTable(options) {
  if (!options) {
    options = {text: 'hello', cow: PERIODIC_TABLE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloPeriodicTable;
    