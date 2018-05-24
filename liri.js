require("dotenv").config();

var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
var inquirer = require("inquirer");

// display options for user input
var askUser = function () {
    inquirer.prompt([
        {
            name: "question",
            message: "What do you want to do?",
            type: "list",
            choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
        }
    ]).then(function (answer) {
        // set userInput to users answer
        userInput = answer.question;
        // call functions depending on user input
        if (userInput === "my-tweets") {
            displayTweets();
        } else if (userInput === "spotify-this-song") {
            displaySpotifySong(userInput2);
        } else if (userInput === "movie-this") {
            displayMovie(userInput2);
        } else if (userInput === "do-what-it-says") {
            displayDoWhat();
        }
    })
}
askUser();

// import the keys.js file
var keys = require("./keys");

// grab the keys for spotify and twitter
var spotifyKeys = keys.spotify;
var twitterKeys = keys.twitter;

// read commands
var userInput = process.argv[2];
var userInput2 = process.argv.slice(3).join(" ");

// displayTweets function
function displayTweets() {
    var client = new Twitter(twitterKeys)

    //display 20 tweets to twitter account
    var params = { screen_name: "realDonaldTrump", count: 20 };

    // retreive tweets
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i <= 19; i++) {
                console.log("----------------------------------")
                console.log(tweets[i].text)
            }
        }
    });
}


// displaySpotifySong function

function displaySpotifySong(userInput2) {
    inquirer.prompt([
        {
            name: "song",
            message: "What song are you searching for?"
        }
    ]).then(function (answer1) {
        userInput2 = answer1.song;
        var spotify = new Spotify(spotifyKeys)
        // display artist, song name, preview link of song, album of song
        spotify.search({ type: 'track', query: userInput2 }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                // artist, song name, preview link of song from spotify, album
                // console.log(data)

                // artist
                console.log("Artist Name: " + data.tracks.items[1].artists[0].name);
                // album name
                console.log("Album Name: " + data.tracks.items[1].album.name);
                // preview link of song from spotify
                console.log("Spotify Link: " + data.tracks.items[1].external_urls.spotify);
                // song name
                console.log("Song Title: " + data.tracks.items[1].name);
            }
        });
    })

}

// grab and assemble move name and store in variable movieName
// displayMovie function
function displayMovie(userInput2) {

    inquirer.prompt([
        {
            name: "movie",
            message: "What movie do you want to search for?"
        }
    ]).then(function (answer2) {
        // console.log(queryURL)
        userInput2 = answer2.movie;
        var queryURL = "http://www.omdbapi.com/?t=" + userInput2 + "&y=&plot=short&apikey=trilogy";
        request(queryURL, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                // console.log(JSON.parse(body))
                console.log("Title: " + JSON.parse(body).Title)
                console.log("Year: " + JSON.parse(body).Year)
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating)
                console.log("Rotten Tomatoes :" + JSON.parse(body).Ratings[1].Value)
                console.log("Country: " + JSON.parse(body).Country)
                console.log("Plot: " + JSON.parse(body).Plot)
                console.log("Actors: " + JSON.parse(body).Actors)
            }
        });
    })
}

// displayDoWhat function
function displayDoWhat() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
     
        var dataArr = data.split(",")
        // show song details from random.txt
        var spotify = new Spotify(spotifyKeys)
        // display artist, song name, preview link of song, album of song
        spotify.search({ type: 'track', query: dataArr[1] }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } else {
                // artist, song name, preview link of song from spotify, album
                // artist
                console.log("Artist Name: " + data.tracks.items[1].artists[0].name);
                // album name
                console.log("Album Name: " + data.tracks.items[1].album.name);
                // preview link of song from spotify
                console.log("Spotify Link: " + data.tracks.items[1].external_urls.spotify);
                // song name
                console.log("Song Title: " + data.tracks.items[1].name);
            }
        });
    })
}
// displayDoWhat();