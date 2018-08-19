// best way of coding, as you are not exposing local variables but only the method 
// object will have access to the local variables 
// Called Revealing Module Pattern - Exposing properties or methods required 
var greeting = 'Hello Worldsss';

function greet(){
    console.log(greeting);
}

module.exports = {
    //exposing only the method
    greet: greet
}