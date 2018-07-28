function Person(fname, lname){
    console.log(this);
    this.fname = fname
    this.lname = lname;
    console.log('this function is invoked');
}

// this function will be available to the object created with Person
// it is better to put methods in prototype so that dont take to much space if function is called to many times
Person.prototype.getFullName = function(){
    return this.fname + ' ' + this.lname;
}

// new keyword will create a object
var john = new Person('john', 'doe'); // will return object with properties fname and lname if it does not return anything
console.log(john);

var jane = new Person('jane', 'doe'); // will return object with properties fname and lname if it does not return anything
console.log(jane);
 
Person.prototype.getFormalFullName = function(){
    return this.lname+' '+this.fname;
}

console.log(jane.getFormalFullName());