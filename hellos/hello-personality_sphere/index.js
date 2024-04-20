
import { think, PERSONALITY_SPHERE } from 'cowsay';
function helloPersonalitySphere(options) {
  if (!options) {
    options = {text: 'hello', cow: PERSONALITY_SPHERE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloPersonalitySphere;
    