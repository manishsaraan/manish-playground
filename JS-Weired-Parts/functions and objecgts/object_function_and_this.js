function a(){
    console.log(this);
    this.newvariable = "hello";
}

var b = function(){
    console.log(this);
}

a();
b();
console.log(newvariable);

var c = {
    name : 'The c object',
    log: function(){
        //workaround to use this
        var self = this;
        // this referes to current object
        this.name = "updated c object";
        console.log(this);

        //this refers to global window
        var setname = function(newName){
            self.name = newName;
        }

        setname('this is updated name!!!');
        console.log(this);
    }
}

c.log();