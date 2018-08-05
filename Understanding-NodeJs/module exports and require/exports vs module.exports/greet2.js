//overriding the default behaviour with short hand and returning object
exports.greet = function(){
    console.log('hello')
}

console.log(exports);
console.log(module.exports);