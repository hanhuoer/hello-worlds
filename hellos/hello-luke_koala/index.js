
import { think, LUKE_KOALA } from 'cowsay';
function helloLukeKoala(options) {
  if (!options) {
    options = {text: 'hello', cow: LUKE_KOALA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloLukeKoala;
    