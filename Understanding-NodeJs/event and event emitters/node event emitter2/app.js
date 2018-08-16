var Emitter = require('events');
var EventConfig = require('./config').events;
var emtr = new Emitter();

emtr.on(EventConfig.GREET,function(){
    console.log('somewhere someone said hello');
});

emtr.on(EventConfig.GREET, function(){
    console.log('a greeting occured');
});

console.log('hello');
emtr.emit(EventConfig.GREET);
