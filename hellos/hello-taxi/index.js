
import { think, TAXI } from 'cowsay';
function helloTaxi(options) {
  if (!options) {
    options = {text: 'hello', cow: TAXI, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTaxi;
    