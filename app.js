var Emitter = require('./emitter');

var emmtr = new Emitter();
emmtr.on('greet', function(){
    console.log('Hello!');
});

emmtr.on('greet', function(){
    console.log('Hellos!!');
});

console.log('Hey!');
// those two functions in the array ran coz of emmiting
emmtr.emmit('greet');
