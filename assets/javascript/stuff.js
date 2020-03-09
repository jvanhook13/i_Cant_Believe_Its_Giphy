var topics = ["memes" , "subarus" , "bunnies" , "node.js" , "narwhals" , "jif"]

 function displayGifs() {
    
    // this in this line is the button that was clicked which grabs the data-name which is the same as button text
    //sets it gif then plugs it into the apiURL
    var gif = $(this).attr("data-name")
    var apiURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=Txl5zxTtp7uNcJisLz536WRVX8Op4ZX7&limit=10";
        console.log(this)
        console.log(gif)
     $.ajax({
         url: apiURL ,
         method: "GET"
        
    }).then(function(response) {
        console.log(apiURL)
        
        console.log(response , "response")
        console.log(response.data.length , "length")
        // grab rating from ajax request
        $("#gifs-view").empty()

        for (var i = 0; i < response.data.length ; i++) {
            
        var gifRating = response.data[i].rating
        console.log(response.data[i].rating , "rating")
        
        // grab gif url from ajax request
        var newGifs = response.data[i].images.original.url
        var newRatings = response.data[i].rating
        console.log(response.data[i].images.original.url , "url") 
        //new div to hold gifs and ratings
        var newDiv = $("<div>")
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
        newGif.attr("src" , response.data[i].images.fixed_height_small_still.url)
        newGif.attr("data-still" , response.data[i].images.fixed_height_small_still.url)
        newGif.attr("data-animate" , newGifs)
        newGif.attr("data-state" , "still")
        newGif.addClass("gifs")
        console.log(newGifs)
        //appends newGif to newDiv
        newDiv.append(newGif)
        // appends newDiv onto gifs-view
        newDiv.appendTo("#gifs-view")
        
        console.log(newGifs)

        
        
        }


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
    $("#gif-input").text(" ")

});

// event handler for clicks on buttons with class gif?
$(document).on("click" , ".gif" , displayGifs)
//animates gifs when clicked and pauses when clicked again
$(document).on("click", ".gifs", function(){
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }

})
// runs make buttons
makeButtons() ;



