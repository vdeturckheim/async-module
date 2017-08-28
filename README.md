# async-module

This module allows to use `await` statements without being into an async function.

However, the execution of the await statements in the modules will be asynchronous.

## Usage

```js
// main.js
'use strict';
const Assert = require('assert');
require('async-module');
const mod = require('./module');

Assert(Object.keys(mod).length === 0);
console.log('Object.keys(mod).length === 0');

setTimeout(() => {
    Assert(Object.keys(mod).length === 1);
    console.log('Assert(Object.keys(mod).length === 1)');
    Assert(mod.message === 'hello world');
    console.log('Assert(mod.message === \'hello world\')');
});
```

```js
// module.js
'use strict';
// this module contains an `await` statement outside of an async function.

const res = await Promise.resolve('hello world');
module.exports.message = res;
```
# WARNING

This module is a prank PoC. It is not to be used in production, nor by anyone really.

It aims at showing that it is not because a hack is possible in the node core that it should be used.

FYI, the source code of the module has only 12 LOC:

```js
'use strict';
const Module = require('module');

const wrapper = [
    '(async function (exports, require, module, __filename, __dirname) { ',
    '\n});'
];

Module.wrap = function (script) {

    return wrapper[0] + script + wrapper[1];
};
```

> Please, never mess with the internals of Node.js like that unless you have a very good reason.

