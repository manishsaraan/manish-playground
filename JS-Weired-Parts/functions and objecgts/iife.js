var firstname = "John";

// iife
(function(name){
    var greeting = "Hello " + name
    console.log(greeting);
})(firstname);