
$('#login').click(function(){
    var language = $('select').val();

    $('#logindiv').hide();

    //initialize and set user name initials
    var G = G$('john', 'doe');

    // set language from dropdown and print greeting
    G.setLang(language).htmlGreeting('#heading', true).log();

})