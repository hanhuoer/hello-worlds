
import { think, COWFEE } from 'cowsay';
function helloCowfee(options) {
  if (!options) {
    options = {text: 'hello', cow: COWFEE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCowfee;
    