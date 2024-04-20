
import { think, DAEMON } from 'cowsay';
function helloDaemon(options) {
  if (!options) {
    options = {text: 'hello', cow: DAEMON, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloDaemon;
    