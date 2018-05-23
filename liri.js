require("dotenv").config();
var Twitter = require("twitter")
var Spotify = require("node-spotify-api")
var request = require("request")
var fs = require("fs");

// import the keys.js file
var keys = require("./keys");

// grab the keys for spotify and twitter
var spotifyKeys = keys.spotify;
var twitterKeys = keys.twitter;

// var inquirer = require("inquirer");


// read commands
var userInput = process.argv[2];
var userInput2 = process.argv.slice(3).join(" ");


if (userInput === "my-tweets") {
    displayTweets();
} else if (userInput === "spotify-this-song" && userInput2) {
    displaySpotifySong();
} else if (userInput === "movie-this" && userInput2) {
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
            for (var i = 0; i <= 19; i++) {
                console.log("---------------------------")
                console.log(tweets[i].text)
            }
        }
    });
}


// displaySpotifySong function

function displaySpotifySong() {
    var spotify = new Spotify(spotifyKeys)
    // display artist, song name, preview link of song, album of song
    spotify.search({ type: 'track', query: userInput2 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        } else {
            // artist, song name, preview link of song from spotify, album
            // console.log(data)

            // artist
            console.log(data.tracks.items[1].artists[0].name);
            // album name
            console.log(data.tracks.items[1].album.name);
            // preview link of song from spotify
            console.log(data.tracks.items[1].external_urls.spotify);
            // song name
            console.log(data.tracks.items[1].name);
            
        }
    });
}



// grab and assemble move name and store in variable movieName
var nodeArgs = process.argv;
var movieName = "";
var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

for (var i = 3; i < process.argv.length; i++) {
    if (nodeArgs > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    } else {
        movieName = nodeArgs[3];
    }
}


// displayMovie function
function displayMovie() {
    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title)
            console.log("Year: " + JSON.parse(body).Year)
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating)
            console.log("Rotten Tomatoes :" + JSON.parse(body).Ratings[1].Value)
            console.log("Country: " + JSON.parse(body).Country)
            console.log("Plot: " + JSON.parse(body).Plot)
            console.log("Actors: " + JSON.parse(body).Actors)
        }
    });
}

// displayDoWhat function
