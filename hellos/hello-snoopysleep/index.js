
import { think, SNOOPYSLEEP } from 'cowsay';
function helloSnoopysleep(options) {
  if (!options) {
    options = {text: 'hello', cow: SNOOPYSLEEP, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSnoopysleep;
    