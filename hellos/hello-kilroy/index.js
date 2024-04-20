
import { think, KILROY } from 'cowsay';
function helloKilroy(options) {
  if (!options) {
    options = {text: 'hello', cow: KILROY, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloKilroy;
    