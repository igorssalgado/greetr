//safe code ready to be reused by anybody
(function(global, $){

    // returns a result of a different function constructor,
    // so no need to use 'new'
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    //here will put any methods 
    // that i want to use inside my obj that returns by greetr
    Greetr.prototype = {};

    //the actual function 
    //obj needs to point to prototype so it can be used by people
    Greetr.init = function(firstName, lastName, language){

        //to be safe, this could point to another obj
        var self = this;
        
        //default values if obj is empty
        self.firstName = firstName || 'default',
        self.lastName = lastName || 'default',
        self.language = language || 'en' //defaul languege will be english

    }

    //any obj created by this function,
    // thats where th proto will be pointing 'Greetr.prototype'
    Greetr.init.prototype = Greetr.prototype;

    //to be available anywhere needs to attach to the window(global)
    //exposes Greetr function with the alias G$
    global.Greetr = global.G$ = Greetr;

}(window, jQuery))