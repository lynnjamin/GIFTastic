///////////////////////////////////////////////////////////////////////////////
// FUNCTIONS  - Defined Functions to be called/referenced later goes here... //
///////////////////////////////////////////////////////////////////////////////


    //////////////////////////////////
    // DECLARE/INITIALIZE VARIABLES //
    //////////////////////////////////

    ///my entire code breaks if this is in the document.ready function//
    var apiKey = "9Kh7ZtNmsYxfE4XPchClcKcJ7LxX1OBc";
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=9Kh7ZtNmsYxfE4XPchClcKcJ7LxX1OBc&tag=&rating=G";

    $.ajax({
        Url : queryURL,
        method : "GET"
    }).then(function(response) {
        console.log(response);

    });

    ///////////////////////////////////////////////////////////////////
    // EVENT FUNCTIONS - Jquery functions to be defined goes here... //
    ///////////////////////////////////////////////////////////////////


    
////////////////
// CODE START //
////////////////
$(document).ready(function() {



    var gameChar = ["mario", "pikachu", "yoshi", "master chief", "tracer", "pac-man", "link", "solid snake", "cloud strife"];

    function displayButtons() {
        $("#newbuttons").empty();
        for(var i = 0; i < gameChar.length; i++) {
            var btn = $("<button>");
            btn.addClass("gc");
            btn.attr("data-name", gameChar[i]);
            btn.text(gameChar[i]);
            $("#newbuttons").append(btn);

        }
    }

    $("#add-character").click(function(event) {
        event.preventDefault();
        var textInput = $("#characterinput").val().trim();
        ///push content into the array
        gameChar.push(textInput);
        console.log(textInput);
        displayButtons();
    });

        displayButtons();
});
