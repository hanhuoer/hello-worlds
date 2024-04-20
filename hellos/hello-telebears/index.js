
import { think, TELEBEARS } from 'cowsay';
function helloTelebears(options) {
  if (!options) {
    options = {text: 'hello', cow: TELEBEARS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTelebears;
    