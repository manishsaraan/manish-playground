// by value (primitives)
var a = 3;
var b;
b = a;
a = 2;
console.log(a);
console.log(b);

//by reference (all objects (including functions))
var c = {
    greeting: 'hi'
};
var d;
d = c;

c.greeting = 'hello'; //mutated

console.log(c);
console.log(d);

// by reference (even as params)
function greet(obj){
    obj.greeting = "HOla";
}

greet(d);
console.log(c);
console.log(d);

//equal operator set up new memory space
c = { greeting: 'howdy' };

console.log(c);
console.log(d);