function greet(whatToSay){
    return function(name){
        console.log(whatToSay + ' ' + name);
    }
}

var sayHi = greet('hi');
sayHi('tony'); //hi tony

function buildFunctions(){
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push(function(){
            console.log(i);
        });
    }

    return arr;
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3

//make it work with es6
function buildFunctions2(){
    var arr = [];

    for(var i = 0; i < 3; i++){
        let j = i;
        arr.push(function(){
            console.log(j);
        });
    }

    return arr;
}

var fs = buildFunctions2();

fs[0](); // 0
fs[1](); // 1
fs[2](); // 2

//make it work with es5 with iffe
function buildFunctions2(){
    var arr = [];

    for(var i = 0; i < 3; i++){
        arr.push((function(j){
            return function(){
              console.log(j);
            }
        }(i)));
    }

    return arr;
}

var fs = buildFunctions2();

fs[0](); // 0
fs[1](); // 1
fs[2](); // 2


//use of closures
function makeGreeting(lang){
    return function(fname, lname){
        if(lang === 'en'){
            console.log('Hello ' + fname +' ' + lname);
        }

        if(lang === 'es'){
            console.log('Hola ' + fname +' ' + lname);
        }
    }
}

var greetEng = makeGreeting('en');
var greetSpn = makeGreeting('es');

greetEng('john', 'doe');
greetSpn('john', 'doe');