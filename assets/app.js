/////////////////////////////////////////////////////////////////////////////////////
// GLOBAL FUNCTIONS - Defined Functions to be called/referenced later goes here... //
/////////////////////////////////////////////////////////////////////////////////////
function renderButtons() {
    $("#newbuttons").empty();
    for (var i = 0; i < gameChar.length; i++) {
        var btn = $("<button>");
        btn.addClass("gc");
        btn.attr("data-name", gameChar[i]);
        btn.text(gameChar[i]);
        $("#newbuttons").append(btn);
    }
}

/////////////////////////////////////////
// GLOBAL DECLARE/INITIALIZE VARIABLES //
/////////////////////////////////////////
var apiKey = "9Kh7ZtNmsYxfE4XPchClcKcJ7LxX1OBc";
var gameChar = ["mario", "pikachu", "yoshi", "master chief", "tracer", "pac-man", "link", "solid snake", "cloud strife"];


////////////////
// CODE START //
////////////////
$(document).ready(function () {

    // Displays initial button array.
    renderButtons();


    ///////////////////////////////////////////////////////////////////
    // EVENT FUNCTIONS - Jquery functions to be defined goes here... //
    ///////////////////////////////////////////////////////////////////

    // EVENT - If GC button is clicked, call the API to render image.
    $(".gc").click(function() {
        var temp = $(this).attr("data-name");
        alert(temp);

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=9Kh7ZtNmsYxfE4XPchClcKcJ7LxX1OBc&q=&limit=10&offset=0&rating=G&lang=en";

        $.ajax({ url: queryURL, method: "GET" }).then(function(response) {
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;
  
            // Creating and storing an image tag
            var catImage = $("<img>");
  
            // Setting the catImage src attribute to imageUrl
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");
  
            // Prepending the catImage to the images div
            $("#images").prepend(catImage);
        });


    });
    
    // EVENT - Appends new character
    $("#add-character").click(function(event) {
        event.preventDefault();
        var textInput = $("#characterinput").val().trim();
        ///push content into the array
        gameChar.push(textInput);
        console.log(textInput);
        renderButtons();
    });


});
