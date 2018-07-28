String.prototype.isLengthGreaterThan = function(value){
    return this.length > value;
}

//function will be added in build in functions
console.log('John'.isLengthGreaterThan(8));