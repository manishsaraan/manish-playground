function Person(fname, lname){
  this.fname = fname;
  this.lname = lname;
}

Person.prototype.fullname = function(){
   console.log(this.fname + ' ' + this.lname)
}

var john = new Person('John', 'Doe');
var jane = new Person('jane', 'Doe');

john.fullname();
console.log(john.__proto__ === jane.__proto__)