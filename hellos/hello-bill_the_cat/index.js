
import { think, BILL_THE_CAT } from 'cowsay';
function helloBillTheCat(options) {
  if (!options) {
    options = {text: 'hello', cow: BILL_THE_CAT, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloBillTheCat;
    