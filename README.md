# LIRI
LIRI is a Language Interpretation and Recognition Interface using the command line node app.

Twitter Example:
![Twitter Screenshot](Screenshots/my-tweets.PNG)

Spotify Example:
![Spotify Screenshot](Screenshots/spotify.PNG)

Movies Example:
![Movies Screenshot](Screenshots/movies.PNG)

Do-what-it-says Example:
![Do-what-it-says Screenshot](Screenshots/do-what.PNG)

## Output of Commands
1. `node liri.js my-tweets`

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.

2. `node liri.js spotify-this-song '<song name here>'`

   * This will output the following information about the song in your terminal/bash window
     
     * Artist(s)
     
     * The song's name
     
     * A preview link of the song from Spotify
     
     * The album that the song is from

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information about the movie to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

4. `node liri.js do-what-it-says`
     
     * `spotify-this-song` will run "I Want it That Way," as follows the text in `random.txt`.

## Getting Started

Open up and download the [project link](https://github.com/hannahlim213/LIRI) 

### Installing

* npm 
* Windows - Git Bash
* Mac - Command Line

## Built With

* [Javascript](https://www.javascript.com/) - programming language
* [Node.js](https://nodejs.org/en/) - javascript runtime

## NPM Packages
* [Twitter](https://www.npmjs.com/package/twitter)
* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* [request](https://www.npmjs.com/package/request)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [inquirer](https://www.npmjs.com/package/inquirer)


## Author

* **Hannah Lim** - [hannahlim213](https://github.com/hannahlim213)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
