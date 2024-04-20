
import { think, PSYCHIATRICHELP } from 'cowsay';
function helloPsychiatrichelp(options) {
  if (!options) {
    options = {text: 'hello', cow: PSYCHIATRICHELP, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloPsychiatrichelp;
    