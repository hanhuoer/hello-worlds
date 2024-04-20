
import { think, TOASTER } from 'cowsay';
function helloToaster(options) {
  if (!options) {
    options = {text: 'hello', cow: TOASTER, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloToaster;
    