//Library collection
const libraries = [];




//Library contstructor
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.tracks = [];
  this.playlists = [];
  libraries.push(this);
}


//Library Prototype methods

Library.prototype.addPlaylist = function (){

}

Library.prototype.printPlaylists = function (){

}




//Playlist constructor

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}



// Playlist methods


Playlist.prototype.addTrack = function (){

}

Playlist.prototype.printTracks = function (){

}

Playlist.prototype.overallRating = function (track) {
  let averageRating = this.tracks.reduce(function(a, b) {
    return (a.rating + b.rating)/tracks.length;
  });
  return averageRating;
}


Playlist.prototype.overallRating = function (track) {
  let averageRating = this.tracks.reduce(function(a, b) {
    return a.length + b.length;
  });
  return averageRating;
}



//Track constructor

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}



//Track methods



//Create istances of one library, add new tracks, and playlists to the library.

let myLibrary = new Library("Joe's Music", "Joe Schmoe");
let myPlaylist = new Playlist("Super Lit Playlist");
let myTrack = new Track("Small Town Southern Man", 5, 280);

console.log(libraries);
console.log(myLibrary);
console.log(myPlaylist);
console.log(myTrack);


// let tracks = [{rating: 5}, {rating: 10}];
// function calculateRating(tracks) {
//   tracks.reduce(function(a, b) {
//     return (a.rating + b.rating)/tracks.length;
//   });
// }

// calculateRating(tracks);
