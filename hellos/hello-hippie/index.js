
import { think, HIPPIE } from 'cowsay';
function helloHippie(options) {
  if (!options) {
    options = {text: 'hello', cow: HIPPIE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHippie;
    