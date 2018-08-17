var EventEmitter = require('events');
var utils = require('util');

function Greetr(){
    this.greeting = 'hello world';
}

// method Greetr also have properties of EventEmitter
utils.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting);
    this.emit('greet', data);
}

var greeting1 = new Greetr();


greeting1.greet();

greeting1.on('emit', function(data){
    console.log('someone greeted.', data);
});
