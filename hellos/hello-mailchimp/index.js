
import { think, MAILCHIMP } from 'cowsay';
function helloMailchimp(options) {
  if (!options) {
    options = {text: 'hello', cow: MAILCHIMP, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloMailchimp;
    