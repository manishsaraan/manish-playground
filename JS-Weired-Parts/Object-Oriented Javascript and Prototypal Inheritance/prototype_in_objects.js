var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
};

var john = {
    firstName: 'john',
    lastName: 'doe',
}

// updating prototype directly
john.__proto__ = person;

//getFullName is not on function but in prototype

console.log(john.getFullName());

var jane = {
    firstName: 'jane'
};

//will find lastname in john as it is not exist in jane
jane.__proto__ = john;
console.log(jane.getFullName())

//reflection and extend
for(var prop in john){
    if(john.hasOwnProperty(prop)){
      console.log(prop + ' : ' + john[prop]);
    }
}

var jane = {
    address: '111 st rd',
    getFormalFullName: function(){
        return this.lastName + ' ' + this.firstName;
    }
};

var jim = {
    getFirstName: function(){
        return firstName;
    }
}

// underscore _.extend will get methods from jand and jim and put them in john
_.extend(john, jane, jim);

console.log(john);