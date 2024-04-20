
import { think, CHARIZARDVICE } from 'cowsay';
function helloCharizardvice(options) {
  if (!options) {
    options = {text: 'hello', cow: CHARIZARDVICE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCharizardvice;
    