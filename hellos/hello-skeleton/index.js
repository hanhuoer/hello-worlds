
import { think, SKELETON } from 'cowsay';
function helloSkeleton(options) {
  if (!options) {
    options = {text: 'hello', cow: SKELETON, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloSkeleton;
    