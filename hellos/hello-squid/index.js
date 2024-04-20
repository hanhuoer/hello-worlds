
import { think, SQUID } from 'cowsay';
function helloSquid(options) {
  if (!options) {
    options = {text: 'hello', cow: SQUID, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSquid;
    