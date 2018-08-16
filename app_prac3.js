// object is a name value pair (include function, properties)
var person = {
    firstname: 'Rishabh',
    lastname: 'Gupta',
    greet: function(){
        console.log('Hello, ' + this.firstname + this.lastname);
    }
}
person.greet();
// proprty of the object can also be accessed as below
console.log(person['firstname']);