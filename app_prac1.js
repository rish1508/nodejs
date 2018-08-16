// function statement 
function greet(){
    console.log('hey');
}

greet();

// functions are first class
function logGreetings(func){
    func();
}

logGreetings(greet);

// fucntion expression
var greetme = function(){
    console.log('Hey there!');
}
greetme();

// its first class
logGreetings(greetme);

// use function expression on the fly
logGreetings(function(){
    console.log('Hey there, Rishabh here');
});