var utils = require('util');

var name = 'tony';

// using utils format method
var greeting = utils.format('Hello %s', name);

// using utils log method which logs with timestamp
utils.log(greeting);