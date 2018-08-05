//using the short hand exports and it will return function which can cause confusion
exports = function(){
    console.log('hello world');
}

console.log(exports);
console.log(module.exports);