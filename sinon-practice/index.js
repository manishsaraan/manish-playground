const sinon = require('sinon');

const spy = sinon.spy();

//calling the spy function
spy('hello', 'world');

//getting the function args
const agrs = spy.firstCall.args;

const user = {
    name: '',
    setName(name){
       this.name = name;
    }
}

//create a spy for setName function
const setNameSpy = sinon.spy(user, 'setName');

//if we call the function then sinon will log it
user.setName('John Doe');

console.log(setNameSpy.callCount); //output: 1

//remove the spy
setNameSpy.restore();

//user as callback function
const callbackSpy = sinon.spy();

const myFunc = (condition, cb) => {
    if(condition){
        cb();
    }
}

myFunc(true, callbackSpy);

console.log(callbackSpy.callCount); //output: 1