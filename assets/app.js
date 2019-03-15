///////////////////////////////////////////////////////////////////////
// GLOBAL FUNCTIONS - Defined Functions to be called/referenced later//
///////////////////////////////////////////////////////////////////////
function renderButtons() {
    $("#newbuttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("verb").addClass("btn btn-dark");
        btn.attr("data-name", topics[i]);
        btn.text(topics[i]);
        $("#newbuttons").append(btn);
        
    }
}

/////////////////////////////////////////
// GLOBAL DECLARE/INITIALIZE VARIABLES //
/////////////////////////////////////////
var topics = ["sleep", "eat", "read", "cry", "laugh", "jump", "type", "skate", "sit", "crash", "dance", "play", "fall"];

$(document).on("click", ".verb", function() {
    //reset for new images
    $("#images").empty();
    var temp = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + temp + "&limit=10&rating=pg";
        //loop to call ajax 10 times
        for(var i = 0; i < 10; i++) {
            $.ajax({ url: queryURL, method: "GET" }).then(function(response) {
                // Saving the image_original_url property
                var imageUrl = response.data.image_original_url;
                // Creating and storing an image tag
                var Image = $("<img>");
                // Setting the Image src attribute to imageUrl
                Image.attr("src", imageUrl);
                Image.attr("width", "300");
                Image.attr("alt", "do it");
                // Prepending the Image to the images div
                $("#images").append(Image);
            });
        }
});

////////////////
// CODE START //
////////////////
$(document).ready(function () {

    // Displays initial button array.
    renderButtons();

    /////////////////////
    // EVENT FUNCTIONS //
    /////////////////////
    
    //Appends new character
    $("#add").click(function(event) {
        event.preventDefault();
        var textInput = $("#verbinput").val().trim();
        //clear textbox
        $("#verbinput").val('');
        ///push content into the array
        topics.push(textInput);
        renderButtons();

        
    });



});