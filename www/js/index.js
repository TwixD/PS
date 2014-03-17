  //DECLARE
  $( "#popup-source" ).popup()
  //DECLARE
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners 
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);

        console.log('Received Event: ' + parentElement);

        //Window resize
        var screen = $.mobile.getScreenHeight()
        var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight()
        var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight()
        var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height()
        var content = screen - header - footer - contentCurrent
        $(".ui-content").height(content)
        //Window resize
    }
};

$('#form-login').submit(function() {
var datosUsuario = $('#user').val()
var datosPassword = $('#password').val()
archivoValidacion = "http://localhost/rutaphp/validacionLogin.php"
$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
.done(function(respuestaServer) {
if(respuestaServer.validacion == "ok"){
$.mobile.changePage("#page-home",
 {
    transition: "flow",
    reverse: false
});
}else{
var popupText = document.getElementById('text-popup');   
popupText.innerHTML = "Usuario y/o Clave inconrrectos";
$( "#popup-source" ).popup( "open" )
}
})
return false;
})
window.addEventListener("orientationchange", function() {
//Window resize
var screen = $.mobile.getScreenHeight()
var header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight()  - 1 : $(".ui-header").outerHeight()
var footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight()
var contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height()
var content = screen - header - footer - contentCurrent
$(".ui-content").height(content)
//Window resize
}, false);