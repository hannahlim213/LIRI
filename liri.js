require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var Twitter = require("twitter");
var twitterKeysFile = require("./keys.js");

var Spotify = require("node-spotify-api");


var client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
});

client.get('favorites/list', function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });



  var spotify = new Spotify({
      id:"ee2aebd3733a475e89d9db5bce004175",
      secret:"02ce3c8792ee4880ad1430019b586323"
  });