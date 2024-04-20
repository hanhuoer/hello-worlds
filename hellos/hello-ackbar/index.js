import {ACKBAR, think} from 'cowsay';

function helloAckbar(options) {
    if (!options) {
        options = {text: 'hello', cow: ACKBAR, eyes: 'Oo', tongue: 'Tt'};
    }
    console.log(think(options));
}

module.exports = helloAckbar;
    