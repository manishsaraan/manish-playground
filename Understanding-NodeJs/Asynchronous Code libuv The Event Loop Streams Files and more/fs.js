var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');

console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', function(err, data){
    console.log(data.toString())
});

console.log('Done')