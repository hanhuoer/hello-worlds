
import { think, HIYOKO } from 'cowsay';
function helloHiyoko(options) {
  if (!options) {
    options = {text: 'hello', cow: HIYOKO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHiyoko;
    