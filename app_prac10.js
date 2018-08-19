// properties, methods
var obj = {
    greet: 'Hello' 
};
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);
// array and function
var arr = [];
arr.push(function(){
    console.log('Hello1');
});
arr.push(function(){
    console.log('Hello2');
});
arr.push(function(){
    console.log('Hello3');
});
arr.push(function(){
    console.log('Hello4');
});
arr.forEach(function(item){
    item();
});