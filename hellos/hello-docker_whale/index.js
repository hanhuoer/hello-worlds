
import { think, DOCKER_WHALE } from 'cowsay';
function helloDockerWhale(options) {
  if (!options) {
    options = {text: 'hello', cow: DOCKER_WHALE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDockerWhale;
    