
import { think, GHOSTBUSTERS } from 'cowsay';
function helloGhostbusters(options) {
  if (!options) {
    options = {text: 'hello', cow: GHOSTBUSTERS, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloGhostbusters;
    