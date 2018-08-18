// immediately invoked function expressions
var firstname = 'Roh';


(function(lastname){
    var firstname = 'Rish';
    console.log(firstname);
    console.log(lastname);
}('Gup'));

console.log(firstname);
