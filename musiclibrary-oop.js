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

//Library prototype methods

Library.prototype.addPlaylist = function (playlist){
  this.playlists.push(playlist);
}

Library.prototype.printPlaylists = function (){
  console.log(`Here are all the playlists in ${this.name} :`);
  this.playlists.forEach (function(playlist) {
     console.log(playlist.name);
    }
  );
}

//Playlist constructor

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

// Playlist prototype methods

Playlist.prototype.addTrack = function (track){
  this.tracks.push(track);
}

Playlist.prototype.printTracks = function (){
  console.log(`Here are all the tracks in ${this.name}: `);
  this.tracks.forEach (function(track) {
     console.log(track.title);
    }
  );
}

Playlist.prototype.overallRating = function () {
  let numTracks = this.tracks.length;
  let sumRating = this.tracks.reduce(function(acc, curr) {
    return acc + curr.rating;
  }, 0);
  console.log(`Overall rating for playlist: ${this.name}`, sumRating/numTracks);
}


Playlist.prototype.totalDuration = function () {
  let playlistDuration = this.tracks.reduce(function(acc, curr) {
    return acc + curr.length;
  }, 0);
  console.log(`Total duration for playlist: ${this.name}`, playlistDuration);
}


//Track constructor

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}


//Create instances of one library, add new tracks, and playlists to the library.

let myLibrary = new Library("Joe's Music", "Joe Schmoe");
let myPlaylist = new Playlist("Super Lit Playlist");
let myPlaylist2 = new Playlist("Super Lit Playlist2");
let myTrack = new Track("Small Town Southern Man", 5, 280);
let myTrack2 = new Track("Protect Ya Neck", 4, 303);
let myTrack3 = new Track("4′33″", 5, 273);

myLibrary.addPlaylist(myPlaylist);
myLibrary.addPlaylist(myPlaylist2);
myPlaylist.addTrack(myTrack);
myPlaylist.addTrack(myTrack2);
myPlaylist.addTrack(myTrack3);

myLibrary.printPlaylists();
myPlaylist.printTracks(myPlaylist);
myPlaylist.overallRating();
myPlaylist.totalDuration();

