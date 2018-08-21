// inbuild events.js from node
var Emitter = require('events');
// another way of using naming conventions
var emitting = require('./config').events;
var emmtr = new Emitter();
emmtr.on(emitting.GREETING, function(){
    console.log('Hello!');
});

emmtr.on(emitting.GREETING, function(){
    console.log('Hellos!!');
});

console.log('Hey!');
// those two functions in the array ran coz of emmiting
emmtr.emit(emitting.GREETING);