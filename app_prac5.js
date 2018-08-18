// pass by value for primitiva values
function value(b){
    b =5;
}

var a =1;
value(a);
console.log(a);

// pass by reference for objects
function byRef(c){
    c.prop1 = function() {},
    c.prop2 = {}
}
var d ={};
d.prop3 = {};
d.prop1 = {};
byRef(d);
console.log(d);