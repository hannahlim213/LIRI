require("dotenv").config();
var Twitter = require("twitter")
var spotify = require("node-spotify-api")
var request = require("request")
var fs = require("fs");

// import the keys.js file
var keys = require("./keys");

var spotifyKeys = keys.spotify;


var twitterKeys = keys.twitter;

// var inquirer = require("inquirer");


// read commands
var userInput = process.argv[2];

if (userInput === "my-tweets") {
    displayTweets();
} else if (userInput === "spotify-this-song") {
    displaySpotifySong();
} else if (userInput === "movie-this") {
    displayMovie();
} else if (userInput === "do-what-it-says") {
    displayDoWhat();
}


// displayTweets function
function displayTweets() {
    var client = new Twitter(twitterKeys)

    //display 20 tweets to twitter account
    var params = { screen_name: "realDonaldTrump", count: 20 };

    // retreive tweets
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            

            for (var i = 0; i <= tweets.length; i++) {
                console.log ("------------------")
                console.log (tweets[i].text)
               
            }
        }
    });
}


// displaySpotifySong function
function displaySpotifySong() {
    var spotify = new Spotify (spotifyKeys)
    // display artist, song name, preview link of song, album of song
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });

}

// displayMovie function

// displayDoWhat function
