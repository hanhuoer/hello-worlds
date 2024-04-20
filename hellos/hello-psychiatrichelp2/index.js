
import { think, PSYCHIATRICHELP2 } from 'cowsay';
function helloPsychiatrichelp2(options) {
  if (!options) {
    options = {text: 'hello', cow: PSYCHIATRICHELP2, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloPsychiatrichelp2;
    