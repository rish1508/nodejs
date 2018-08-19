var greetings = require('./greetings.json');
var greeting = function(){
    console.log(greetings.en);
}
module.exports = greeting;