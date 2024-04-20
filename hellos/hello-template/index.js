
import { think, TEMPLATE } from 'cowsay';
function helloTemplate(options) {
  if (!options) {
    options = {text: 'hello', cow: TEMPLATE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTemplate;
    