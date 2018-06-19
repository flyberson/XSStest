
var userinput;
$(document).ready(function () {

    $("#bt1").click(function () {

        getpoke();
    });

})

function getpoke(){
   userinputtext= document.getElementById("text1").value;


    //$( "#body" ).append( userinputtext );
    document.getElementById("body").appendChild(document.createTextNode(userinputtext));
    //<script>window.location.replace("https://www.google.dk/")</script>
}