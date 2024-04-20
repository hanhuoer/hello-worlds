
import { think, TWEETY_BIRD } from 'cowsay';
function helloTweetyBird(options) {
  if (!options) {
    options = {text: 'hello', cow: TWEETY_BIRD, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloTweetyBird;
    