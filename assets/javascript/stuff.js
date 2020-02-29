var topics = ["memes" , "subarus" , "bunnies" , "crackheads" , "narwhals" , "jif"]

 function displayGifs() {
    var apiURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "s&api_key=dc6zaTOxFJmzC&limit=10";
    var gif = $(this).attr("data-name")

     $.ajax({
         url: apiURL ,
         method: "GET"

    }).then(function(response) {
        console.log(response , "response")
        //new div to hold gifs and ratings
        var newDiv = $("#<div>")
        // grab rating from ajax request
        var gifRating = response.rating
        console.log(response.rating)
        // grab gif url from ajax request
        var newGifs = response.url
        // creates new paragraph tag for ratings
        var newP = $("<p>")
        // puts gif rating in new p
        newP.text(gifRating)
        //appends the new partagraph into the new div
        newDiv.append(newP)
        //appends newDiv onto the gifs-view div
        newDiv.appendTo("#gifs-view")
        // creates a new img tag for the gif url
        var newGif = $("<img>")
        // puts the img source as the gif url 
        newGif.attr("src" , newGifs)
        //appends newGif to newDiv
        newDiv.append(newGif)
        // appends newDiv onto gifs-view
        newDiv.appendTo("#gifs-view")
        
        console.log(newGifs)


 })

}

function makeButtons() {
//emptys previous buttons so we dont get dupes
$("#buttons-view").empty() ;

//loops throughy topics
for (var i = 0; i < topics.length; i++) {
    //makes new button
    var button = $("<button>");
    // gives button class "gif"
    button.addClass("gif");
    //gives the button data-name
    button.attr("data-name", topics[i]) ;
    //fills in the text for the button
    button.text(topics[i]) ;
    //appends button into buttons view
    $("#buttons-view").append(button) ;


} }

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    // allows the form to get a value
    var gif = $("#gif-input").val().trim();
    // pushes that value into the topics array 
    topics.push(gif);

    //runs make buttons on click
    makeButtons(); 

});

// event handler for clicks on buttons with class gif?
$(document).on("click" , ".gif" , displayGifs)
// runs make buttons
makeButtons() ;