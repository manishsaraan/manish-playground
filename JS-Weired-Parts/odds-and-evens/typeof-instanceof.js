var l = function(input){
    console.log(input);
}
var a = 3;
l(typeof 3);

var b = 'hello';
l(typeof b);

var c = {};
l(typeof c);

var d = [];
l(typeof d); //weired object
l(Object.prototype.toString.call(d)); //better
l(Array.isArray(d)); 

function Person(name){
    this.name = name;
}

var e = new Person('Jane');
l(typeof e);
l(e instanceof Person);

l(typeof undefined); //
l(typeof null); //object bug in js

var e = function(){}
l(typeof e); //function