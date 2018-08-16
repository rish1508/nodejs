function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

// create a prototype inheritance
Person.prototype.greeting = function(){
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}
var rish = new Person('Rishabh','Gupta');
var rah = new Person('Rishabh12','Gupta1212');
rish.greeting();
rah.greeting();
