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

// DOCUMENT READY FUNCTION
$( document ).ready(function() {
	
	displayList(myPlayList);
	$("#submit").click( function(){
		clearList();
		addSong();
		displayList(myPlayList);
	});

});

function displayList(array){
	
	for( var i=0; i<array.length; i++) {
    
        $("#playlist").append(
           '<div class="col-lg-4" id="indivual">'+ 
            	'<ul style="list-style: none;">'+
            	'<li class="nameheader">\
                	<h3>' + array[i].title + '</h3>\
            	</li\
            	<li class="artist">\
            	   <p>' + array[i].artist + '</p>'+
            	'</li>'+
				'<li class="link">' +
					`<a href="`+ array[i].mp3url + '">Link to Song</a>\
				 </li>'+
				'<button>&times</button>'+
				'<li id="image">\
					<img src="' + array[i].imageurl + '">\
				</li>'+
				'</ul>'+
			'</div>'
		);

    }
}
function clearList(){
  
  $("#playlist").empty();
  
}

function addSong(){
 
 var titleInput = $("#nameofSong").val();
 var artistInput = $("#artist").val();
 var mp3urlInput = $("#mp3url").val();
 var imgurlInput = $("#imgurl").val(); 
  
  var song = {
  	"title": titleInput,
  	"artist": artistInput,
  	"mp3url": mp3urlInput,
  	"imageurl": imgurlInput,
  };
  
 myPlayList.push(song); 
  
}



