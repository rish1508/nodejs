// object/ constructor
function greetn() {
    // property
    this.greeting = "Hello World!!!";
    // method of an object
    this.greet = function(){
        console.log(this.greeting);
    };
};
// replace the empty object with my own object
module.exports = new greetn();