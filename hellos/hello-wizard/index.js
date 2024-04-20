
import { think, WIZARD } from 'cowsay';
function helloWizard(options) {
  if (!options) {
    options = {text: 'hello', cow: WIZARD, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloWizard;
    