
import { think, HYPNO } from 'cowsay';
function helloHypno(options) {
  if (!options) {
    options = {text: 'hello', cow: HYPNO, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloHypno;
    