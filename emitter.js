// creating object using a function constructor
function Emitter(){
    // empty property
    this.events = {
        // below property is created which is an array for example 
        // prop :[]
    };
}

Emitter.prototype.on = function(type, listner){
    // create a property which is an arry, with the name "type", if it doesn't exist
    this.events[type] = this.events[type] || [];
    // push listner functions to the array created 
    // array will be some thing like this { onSave: [function(){},function(){},function(){}] }
    this.events[type].push(listner);
}

// emmiting an event 
Emitter.prototype.emmit = function(type){
    // if there is a property array, then loop over the array and execute the function listners
    if(this.events[type]){
        this.events[type].forEach(function(listner) {
            listner();
        });
    }
}

module.exports = Emitter;