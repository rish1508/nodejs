var greet1 = require('./greet1.js');
greet1();
// calling the property/method which is a part of the module.expors
var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
// call the method of the returned object
greet3.greet();
greet3.greeting = 'Changed Hello World';
// when ever we use the require again for the object, it keeps the previous object
// in memory as cached and points to the same object as reference
// highly efficient
var greetn = require('./greet3');
greetn.greet();

var Greet4 = require('./greet4');
// helps to create new objects on ur own 
var greetl = new Greet4();
greetl.greet();

var greet5 = require('./greet5').greet;
greet5();