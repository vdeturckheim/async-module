'use strict';
const Module = require('module');

const wrapper = [
    '(async function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];

Module.wrap = function (script) {

    return wrapper[0] + script + wrapper[1];
};
