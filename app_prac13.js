// prototype chain
// object
var person ={
    firstname:'',
    lastname:'',
    // method in an object
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

// create an enpty object whose prototype is person object
var rish = Object.create(person);
rish.firstname = 'Rishabh';
rish.lastname = 'Gupta';
console.log(rish.greet());
var ron = Object.create(person);
ron.firstname = 'Ron';
ron.lastname = 'Putting';
console.log(ron.greet());