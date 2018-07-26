function mapForEach(arr, fn){
    var newArr = [];
    for(var i=0, len = arr.length; i < len; i++){
        newArr.push(
            fn(arr[i])
        );
    };

    return newArr;
}


var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(value){
    return value * 2;
});

console.log(arr2);

var arr3 = mapForEach(arr1, function(value){
    return value > 2;
});

console.log(arr3);

var checkPassLimit = function(limiter, item){
    return item > limiter;
}

var limiterSimplified = function(limiter){
    return function(limiter, value){
        return limiter > value;
    }.bind(this, limiter);
};

var arr4 = mapForEach(arr1, limiterSimplified(1));
console.log(arr4);