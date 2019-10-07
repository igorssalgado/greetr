// gets a new obj 
// (the architecture allows us to no have to use the 'new' keyword here)
var g = G$('john', 'doe')

// use our chainable methods
g.greet().setLang('es').greet(true).log();

//lets use our object on the click of the login button
$('#login').click(function(){

    // create a new Greetr obj
    var loginGrtr = G$('Igor', 'Salgado');

    // hide the login to the screen
    $('#logindiv').hide();

    //fire off HTML greeting, passing the '#greeting' as the selector 
    // and the chosen language, and log the welcome as well
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', false).log();
});