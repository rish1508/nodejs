// object/ constructor
function greetn() {
    // property
    this.greeting = "Hello World!!!!!!!!!";
    // method of an object
    this.greet = function(){
        console.log(this.greeting);
    };
};
// pass the object and provide ability to create new objects from app.js
module.exports = greetn;