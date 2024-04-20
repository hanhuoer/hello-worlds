
import { think, VADER_KOALA } from 'cowsay';
function helloVaderKoala(options) {
  if (!options) {
    options = {text: 'hello', cow: VADER_KOALA, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloVaderKoala;
    