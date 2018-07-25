var person = {
    firstName: 'john',
    lastName: 'Doe',
    getFullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
}

//create a function outside 
var logName = function(lang1, lang2){
    console.log('Logged : ' + this.getFullName());
    console.log('arguments ' + lang1 +' ' + lang2);
    console.log('-----------');
}

//bind will create a copy of function on which you are using it eg. logName and bind 'this' of that function to object.
var logPersonName = logName.bind(person);

logPersonName('en');

//call will call the person with option to pass 'this' object and params as comma seprated
logName.call(person, 'en', 'es');

//call will call the person with option to pass 'this' object and params as array
logName.apply(person, ['en', 'es']);

//you can create iife and call 'call' or 'apply'

(function(lang1, lang2){
    console.log('Logged : ' + this.getFullName());
    console.log('arguments ' + lang1 +' ' + lang2);
    console.log('-----------');
}).apply(person,['es']);


//function borrowing
var person2 = {
    firstName: 'john2',
    lastName: 'Doe2',
};

console.log(person.getFullName.apply(person2));

//function currying
function multiply(a, b){
    return a*b;
}

//calling bind with params will create a copy of that function and PERMANENTLY add passed param in function.
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));