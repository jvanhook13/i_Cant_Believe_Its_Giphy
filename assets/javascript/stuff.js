var topics = ["memes" , "subarus" , "bunnies" , "crackheads" , "narwhals" , "jif"]
//  var apiURL = "https://api.giphy.com/v1/gifs/search?api_key=Txl5zxTtp7uNcJisLz536WRVX8Op4ZX7&q=" + gif + "&limit=10&offset=3&rating=PG-13&lang=en"
 function something() {

//      $.ajax({
//          url: apiURL ,
//          method: "GET"

//     }).then(function(response) {
//         var newDiv = $("#<div>")
//         var gifRating = response.rating
//         var newGifs = response.url
        
//         console.log(newGifs)


//  })

}

function makeButtons() {

$("#buttons-view").empty() ;

for (var i = 0; i < topics.length; i++) {
    var b = $("<button>");
    b.addClass("gif");
    b.attr("data-name", topics[i]) ;
    b.text(topics[i]) ;
    $("#buttons-view").append(b) ;


} }

$("#add-gif").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    topics.push(gif);


    makeButtons(); 

});

$(document).on("click" , ".gif" , something)

makeButtons() ;