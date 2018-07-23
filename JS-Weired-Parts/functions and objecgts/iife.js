var firstname = "John";
var greeting = "Hola";
// iife
(function(global, name){
    var greeting = "Hello " + name;
    global.greeting = "Hello";
    console.log(greeting);
})(window, firstname);

console.log(greeting); //Hello

