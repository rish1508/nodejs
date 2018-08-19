// using the native/core modules from node js
// like using in c# to use local libraries
var util = require('util');

var name = 'Tony';
var greeting = util.format('hello, %s', name);
util.log(greeting);