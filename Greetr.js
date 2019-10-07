// safe code ready to be reused by anybody
; (function (global, $) {

    // returns a result of a different function constructor,
    // so no need to use 'new'
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    // making sure that others outside greetr 
    // function are not able to change, 
    // I will have to expose them (it is not exposed)

    var supportedLangs = ['en', 'es' , 'pt'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
        pt: 'Eae caraio'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        pt: 'Olá'
    };

    // to log to the console to inform it was logged
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio session',
        pt: 'Logou mlk'
    }

    // here will put any methods 
    // that i want to use inside my obj that returns by greetr
    // things will me exposed by the prototype
    // this. will point to the obj which was created
    Greetr.prototype = {

        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            // check if the language provided by the user is found in the array 'supportedLangs'
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function (formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang: function (lang) {
            this.language = lang;
            this.validate();

            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    // the actual function 
    // obj needs to point to prototype so it can be used by people
    Greetr.init = function (firstName, lastName, language) {

        // to be safe as this could point to another obj
        var self = this;

        // default values if obj is empty
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en'; //defaul languege will be english
        self.validate();
    }

    // any obj created by this function,
    // thats where th proto will be pointing 'Greetr.prototype'
    Greetr.init.prototype = Greetr.prototype;

    // to be available anywhere needs to attach to the window(global)
    // exposes Greetr function with the alias G$
    global.Greetr = global.G$ = Greetr;

}(window, jQuery))