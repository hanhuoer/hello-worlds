
import { think, PTERODACTYL } from 'cowsay';
function helloPterodactyl(options) {
  if (!options) {
    options = {text: 'hello', cow: PTERODACTYL, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloPterodactyl;
    