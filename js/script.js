// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = 
    {
	"title":"If I Ain't Got You",
	"artist":"Alicia Keys",
	"song-length":"3 minutes 48 seconds",
	"mp3-url":"https://www.youtube.com/watch?v=Ju8Hr50Ckwk",
	"image-url":"https://images.genius.com/b42cf2813036aa694cf44fec6b8d3ff6.1000x1000x1.jpg",
};


var myPlayList = [
	{
		title:"24K Magic",
		artist:"Bruno Mars",
		mp3url:"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		imageurl:"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		title:"Sir Duke",
		artist:"Stevie Wonder",
		mp3url:"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		imageurl:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		title:"Sorry",
		artist:"Justin Bieber",
		mp3url:"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		imageurl:"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

];

var title = $("#nameofSong").val();
var artist = $("#artist").val();
var mp3url = $("#mp3url").val();
var imgurl = $("#imgurl").val();

// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	
	displayList(myPlayList);
	

});

function displayList(array){
	

    for( var i=0; i<array.length; i++) {
    
        $("#playlist").append(
            '<div class="nameheader">\
                <h3>' + array[i].title + '</h3>\
            </div>\
            <div class="artist">\
                <p>' + array[i].artist + '</p>\
            <div class="link">\
                <a href="' + array[i].mp3url + '">Link</a>\
            </div>\
            <div class="img">\
                <img src="' + array[i].imageurl + '">\
            </div>\
            <button aria-label="Close Account Info Modal Box" id="x">&times;</button> '
         );
       
    }

}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}