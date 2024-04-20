
import { think, AWESOME_FACE } from 'cowsay';
function helloAwesomeFace(options) {
  if (!options) {
    options = {text: 'hello', cow: AWESOME_FACE, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloAwesomeFace;
    