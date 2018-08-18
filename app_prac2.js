// use a module
// behind the scenes this module is wrapped in a function expression
// by module class and passed to V8 and it returns the result in module.exports 
// in function expression we pass require path, module code etc.
// module is passed by reference to the function expression, so module.exports act like a window  outside the function
// module.exports comes back from require 
var greets = require('./greet');
greets();