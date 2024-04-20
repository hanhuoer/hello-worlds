
import { think, CAKE_WITH_CANDLES } from 'cowsay';
function helloCakeWithCandles(options) {
  if (!options) {
    options = {text: 'hello', cow: CAKE_WITH_CANDLES, eyes: 'Oo', tongue: 'Tt'};
  }
  console.log(think(options));
}
module.exports = helloCakeWithCandles;
    