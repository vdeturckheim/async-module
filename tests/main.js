'use strict';
const Assert = require('assert');
require('../index');
const mod = require('./module');

Assert(Object.keys(mod).length === 0);
console.log('Object.keys(mod).length === 0');

setTimeout(() => {
    Assert(Object.keys(mod).length === 1);
    console.log('Assert(Object.keys(mod).length === 1)');
    Assert(mod.message === 'hello world');
    console.log('Assert(mod.message === \'hello world\')');
});
