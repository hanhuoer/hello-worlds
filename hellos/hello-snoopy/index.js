
import { think, SNOOPY } from 'cowsay';
function helloSnoopy(options) {
  if (!options) {
    options = {text: 'hello', cow: SNOOPY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSnoopy;
    