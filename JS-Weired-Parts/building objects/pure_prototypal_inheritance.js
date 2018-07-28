//Object.create polyfill
if(!Object.create){
    Object.create = function(o){
        if(arguments.length > 1){
            throw new Error('Object.create ecepts only one parameter.')
        }

        //create a new function
        function F() {}

        //set function prototype equals to input object
        F.prototype = o;

        //return empty object with prototype equals to input object
        return new F();
    }
}

//setting default value and all our methods in base object
var person = {
    fname: 'Default',
    lname: 'Default',
    greet: function(){
        return 'hi '+ this.fname;
    }
};

//use the original object methods and update only properties
var john = Object.create(person);
console.log(john);
john.fname = "john";
john.lname = "doe";
console.log(john)