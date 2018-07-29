(function(global, $){

    // new object
    var Greetr = function(fname, lname, lang){
        return new Greetr.init(fname, lname, lang);
    }
    
    //private variables
    var supportedLangs = ['en','es'];
    
    var greetings = {
        en: 'hello',
        es: 'hola',
    };

    var formalGreeting = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    // all of our methods with be in prototype to save disk space
    Greetr.prototype = {
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw "Invalid language ";
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function(){
            return formalGreeting[this.language] + ' ' + this.fullName() + '!';
        },
        greet: function(formal){
            var msg;
            //if undefined or null then it will coerced to 'false'
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }

            if(console){
                console.log(msg)
            }
            
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },
        setLang: function(newLang){
            this.language = newLang;
             
            this.validate();

            return this;
        },
        htmlGreeting:function(selector, formal){
            if(!$){
                throw new Error('jquery not loaded');
            }

            if(!selector){
                throw new Error('selector missing');
            }

            var msg;

            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    //actual object is created here. allowing us to 'new' an object without calling new.
    Greetr.init = function(fname, lname, lang){
        var self = this;
        self.firstName = fname || '';
        self.lastName = lname || '';
        self.language = lang || 'en';

        // validate lagnuage support
        self.validate();
    }

    //trick borrowed from jquery so we dont have to use new
    Greetr.init.prototype = Greetr.prototype;

    //attach our greeter to global object
    global.G$ = global.Greetr = Greetr;
  
}(window, jQuery))