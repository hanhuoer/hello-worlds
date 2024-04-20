
import { think, DALEK_SHOOTING } from 'cowsay';
function helloDalekShooting(options) {
  if (!options) {
    options = {text: 'hello', cow: DALEK_SHOOTING, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDalekShooting;
    