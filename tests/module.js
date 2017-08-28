'use strict';
// this module contains an `await` statement outside of an async function.

const res = await Promise.resolve('hello world');
module.exports.message = res;