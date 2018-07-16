//function statement
//can be used before declairing
function greet(){
    console.log('hi');
}

//function expression
//will throw error if used before declairing
var anonGreet = function(){
    console.log('hi');
}

function log(a){
    a();
}

// function can be passed as param
log(function(){
    console.log(a);
})

